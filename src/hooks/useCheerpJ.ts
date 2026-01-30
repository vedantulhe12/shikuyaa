import { useState, useEffect, useRef } from 'react'

interface CheerpJState {
  isReady: boolean
  isLoading: boolean
  error: string | null
}

declare global {
  interface Window {
    cheerpjInit?: () => Promise<any>
    cheerpjRunMain?: (mainClass: string, jarPath: string, ...args: string[]) => Promise<void>
    cheerpjRunJar?: (jarPath: string, ...args: string[]) => Promise<void>
  }
}

export const useCheerpJ = () => {
  const [state, setState] = useState<CheerpJState>({
    isReady: false,
    isLoading: false,
    error: null,
  })
  
  const initRef = useRef(false)

  useEffect(() => {
    // Prevent multiple initializations
    if (initRef.current) return
    initRef.current = true

    const loadCheerpJ = async () => {
      setState(prev => ({ ...prev, isLoading: true, error: null }))

      try {
        // Check if CheerpJ is already loaded
        if (window.cheerpjInit) {
          await window.cheerpjInit()
          setState({ isReady: true, isLoading: false, error: null })
          return
        }

        // Dynamically load CheerpJ script
        const script = document.createElement('script')
        script.src = 'https://cjrtnc.leaningtech.com/3.0/cj3loader.js'
        script.async = true

        script.onload = async () => {
          try {
            if (window.cheerpjInit) {
              await window.cheerpjInit()
              setState({ isReady: true, isLoading: false, error: null })
            } else {
              throw new Error('CheerpJ initialization function not found')
            }
          } catch (err) {
            setState({
              isReady: false,
              isLoading: false,
              error: err instanceof Error ? err.message : 'Failed to initialize CheerpJ',
            })
          }
        }

        script.onerror = () => {
          setState({
            isReady: false,
            isLoading: false,
            error: 'Failed to load CheerpJ script',
          })
        }

        document.head.appendChild(script)

        // Cleanup function
        return () => {
          // Note: We don't remove the script as CheerpJ should persist across component lifecycle
          // Only cleanup if absolutely necessary
        }
      } catch (err) {
        setState({
          isReady: false,
          isLoading: false,
          error: err instanceof Error ? err.message : 'Unknown error occurred',
        })
      }
    }

    loadCheerpJ()
  }, [])

  const runJar = async (jarPath: string, ...args: string[]) => {
    if (!state.isReady) {
      throw new Error('CheerpJ is not ready yet')
    }
    if (window.cheerpjRunJar) {
      await window.cheerpjRunJar(jarPath, ...args)
    }
  }

  const runMain = async (mainClass: string, jarPath: string, ...args: string[]) => {
    if (!state.isReady) {
      throw new Error('CheerpJ is not ready yet')
    }
    if (window.cheerpjRunMain) {
      await window.cheerpjRunMain(mainClass, jarPath, ...args)
    }
  }

  return {
    ...state,
    runJar,
    runMain,
  }
}
