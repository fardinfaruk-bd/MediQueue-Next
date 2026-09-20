import { Award, Calendar, Target, ShieldCheck } from 'lucide-react';

export default function WhyLearnWithUs() {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-[#2563eb]" />,
      iconBg: 'bg-blue-50',
      title: 'Expert Tutors',
      description: 'Learn from qualified, background-checked instructors from world-renowned universities and top industry roles.',
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#2563eb]" />,
      iconBg: 'bg-blue-50',
      title: 'Flexible Scheduling',
      description: 'Book sessions that effortlessly fit your busy schedule with 24/7 calendar sync and free easy rescheduling.',
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-600" />,
      iconBg: 'bg-emerald-50',
      title: 'Personalized Learning',
      description: 'Get tailored 1-on-1 guidance, custom diagnostic assessments, and curated learning roadmaps for every subject.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#2563eb]" />,
      iconBg: 'bg-blue-50',
      title: 'Secure Booking',
      description: 'Simple, reliable checkout with escrow-backed session satisfaction guarantee and zero recurring hidden fees.',
    },
  ];

  return (
    <section className="bg-[#faf9fe] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-[#2563eb] text-xs font-bold tracking-widest uppercase mb-3">
            THE LUMINA DIFFERENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Why Learn With Us?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We combine top-tier vetted educators with frictionless booking and personalized lesson plans designed for your growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-start"
            >
              {/* Feature Icon Container */}
              <div className={`p-3.5 rounded-2xl ${feature.iconBg} mb-6 flex items-center justify-center`}>
                {feature.icon}
              </div>

              {/* Feature Title */}
              <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-3">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}