import Link from 'next/link';
import { Star } from 'lucide-react';

const PersonalizedGuidance = () => {
    return (
        <section className="py-16 w-full mx-auto px-4 sm:px-6 lg:px-0">
            {/* Main Gradient Banner Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#28216c] via-[#4f46e5] to-[#2563eb] p-8 sm:p-12 lg:p-16 text-white shadow-xl">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Content */}
                    <div className="lg:col-span-7 flex flex-col items-start">
                        {/* Top Badge */}
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6 border border-white/10">
                            1-ON-1 MENTORSHIP
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
                            Get personalized guidance from experienced mentors.
                        </h2>

                        {/* Description */}
                        <p className="text-blue-100 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
                            Whether preparing for standardized exams, university admissions, or upskilling for a career change, our dedicated tutors are here for you.
                        </p>

                        {/* Action Button */}
                        <Link
                            href="/all-tutors"
                            className="inline-flex items-center justify-center bg-white hover:bg-blue-50 text-gray-900 font-semibold px-7 py-3.5 rounded-xl shadow-lg transition-all duration-200"
                        >
                            Explore Tutors &rarr;
                        </Link>
                    </div>

                    {/* Right Testimonial Card */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl">
                            {/* Star Ratings */}
                            <div className="flex items-center gap-1 text-amber-400 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>

                            {/* Quote Text */}
                            <p className="text-white/90 text-sm sm:text-base italic leading-relaxed mb-6">
                                &ldquo;Dr. Jenkins helped me raise my SAT math score by 160 points in just 6 weeks! The clear explanations made all the difference.&rdquo;
                            </p>

                            {/* Divider Line */}
                            <div className="h-px bg-white/15 w-full mb-4"></div>

                            {/* User Profile Info */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-sm shadow-inner">
                                    AM
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Alex Miller</h4>
                                    <p className="text-xs text-blue-200">Stanford Freshman &bull; Verified Learner</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default PersonalizedGuidance;