import { Filter, CalendarCheck, MonitorPlay } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      stepNumber: '01',
      badgeBg: 'bg-[#2563eb]',
      title: 'Find a Tutor',
      description: 'Browse tutors based on subject, rating, price, and verified student reviews to discover your perfect academic match.',
      footerIcon: <Filter className="w-4 h-4 text-[#2563eb]" />,
      footerText: 'Smart matching engine',
      footerTextColor: 'text-[#2563eb]',
    },
    {
      stepNumber: '02',
      badgeBg: 'bg-[#6366f1]',
      title: 'Book a Session',
      description: 'Select a convenient time slot on the live calendar and confirm your booking instantly with safe, transparent checkout.',
      footerIcon: <CalendarCheck className="w-4 h-4 text-[#6366f1]" />,
      footerText: 'Instant sync',
      footerTextColor: 'text-[#6366f1]',
    },
    {
      stepNumber: '03',
      badgeBg: 'bg-[#059669]',
      title: 'Start Learning',
      description: 'Meet your tutor in our interactive virtual classroom with whiteboard tools and begin your personalized journey.',
      footerIcon: <MonitorPlay className="w-4 h-4 text-[#059669]" />,
      footerText: 'Built-in video & whiteboard',
      footerTextColor: 'text-[#059669]',
    },
  ];

  return (
    <section className="bg-[#faf9fe] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-[#2563eb] text-xs font-bold tracking-widest uppercase mb-3">
            STEP-BY-STEP GUIDE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Start achieving your learning milestones in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center text-center justify-between"
            >
              <div>
                <div className={`${item.badgeBg} text-white font-bold text-lg w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-blue-500/10`}>
                  {item.stepNumber}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 w-full flex items-center justify-center gap-2 text-xs font-semibold">
                {item.footerIcon}
                <span className={item.footerTextColor}>{item.footerText}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}