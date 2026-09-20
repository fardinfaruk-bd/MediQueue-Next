import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import TutorCard from './TutorCard'; // Adjust path if your folder structure differs
import { getAvailableTutors } from '@/lib/data';

export default async function ExpertTutorsSection() {
  const tutorsData = await getAvailableTutors();

  return (
    <section className=" py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
              Meet Our Expert Tutors
            </h2>
            <p className="text-gray-600 text-base max-w-xl">
              Learn from experienced tutors who are ready to help you reach your goals.
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mb-12">
          {tutorsData.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/all-tutors"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-2xl border border-gray-200 shadow-sm transition-all duration-200 group"
          >
            View All 500+ Tutors
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
          </Link>
        </div>

      </div>
    </section>
  );
}