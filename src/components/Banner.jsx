import Image from 'next/image';
import { ArrowRight, Star, ShieldCheck, Video } from 'lucide-react';
import { Button } from '@heroui/react';
import Link from 'next/link';

export default function Banner() {
  return (
    <section className="relative overflow-hidden  py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <div className="inline-flex items-center gap-2 bg-[#f0ecfe] text-[#5b3df6] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#5b3df6] animate-pulse"></span>
              Learn from expert tutors
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6">
              Find the Right Tutor for Your <span className="text-[#2563eb]">Learning Journey</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-8 leading-relaxed">
              Connect with verified, passionate tutors for 1-on-1 personalized lessons in over 120 subjects. Accelerate your academic and professional goals at your own pace.
            </p>

            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                href="/all-tutors"
                className="inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-200"
              >
                Find a Tutor
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/add-tutor"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 font-medium px-7 py-3.5 rounded-xl border border-gray-200 shadow-sm transition-all duration-200"
              >
                Become a Tutor
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-gray-200/60 w-full">
              <div className="flex -space-x-2 overflow-hidden">
                <Image className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" width={9} height={9} src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" alt="User" />
                <Image className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" width={9} height={9} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" alt="User" />
                <Image className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" width={9} height={9} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" alt="User" />
                <Image className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" width={9} height={9} src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces" alt="User" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-gray-900 font-bold text-sm ml-1">4.9/5</span>
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  Trusted by 15,000+ students & parents worldwide
                </span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-md lg:max-w-none rounded-3xl p-3 bg-white shadow-xl shadow-purple-900/5 border border-purple-100/60">
              <div className="relative rounded-2xl overflow-hidden aspect-4/3 lg:aspect-square">
                <Image
                  src="https://i.ibb.co.com/Q3ZwWqZn/Hero-Image.png"
                  alt="Tutor helping student"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 z-10 animate-bounce-slow">
                <div className="bg-blue-600 text-white p-1.5 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-gray-900">
                    <span className="text-amber-500">★</span> 4.98 (240+)
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium">Top Rated Math Tutor</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse "></div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Next session in 20m</p>
                  <p className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
                    <Video className="w-3 h-3 text-blue-600" /> Live 1-on-1 Video
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}