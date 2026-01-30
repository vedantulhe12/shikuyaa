import { stats } from '../data/mockData'

const StatsSection = () => {
  const statsData = [
    {
      number: stats.enrollment,
      label: 'ENROLLMENT',
      icon: '👥',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: stats.tests,
      label: 'TESTS',
      icon: '📝',
      color: 'from-green-500 to-green-600'
    },
    {
      number: stats.questions,
      label: 'QUESTIONS',
      icon: '❓',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: stats.videos,
      label: 'VIDEOS',
      icon: '🎥',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-pink-600 to-red-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-300 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-12 h-12 bg-yellow-300 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-yellow-400">Impact</span>
          </h2>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">
            Join thousands of students who have successfully transformed their careers with Shikuyaa
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base font-semibold text-blue-100">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Best Placement Record</h3>
            <p className="text-pink-100 text-sm">Highest placement success rate in the industry</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Student Satisfaction</h3>
            <p className="text-pink-100 text-sm">95% student satisfaction rate with our programs</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Success Guarantee</h3>
            <p className="text-pink-100 text-sm">Money back guarantee if you don't get placed</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection