import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import DashboardLayout from './components/DashboardLayout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Assessment from './pages/Assessment'
import AssessmentQuestion from './pages/AssessmentQuestion'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes with Main Layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        
        {/* Dashboard Routes with Dashboard Layout */}
        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/dashboard/assessment" element={<DashboardLayout><Assessment /></DashboardLayout>} />
        
        {/* Assessment Question - Full Screen (No Layout) */}
        <Route path="/assessment/question/:id" element={<AssessmentQuestion />} />
      </Routes>
    </Router>
  )
}

export default App