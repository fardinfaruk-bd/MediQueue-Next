"use client"
import Image from 'next/image';
import { Star, MapPin, Calendar, Clock, Users } from 'lucide-react';
import Link from 'next/link';

export default function TutorCard({ tutor }) {
  const {
    _id,
    tutorName,
    subject,
    imageUrl,
    availableSchedule,
    hourlyFee,
    totalSlot,
    location,
    teachingMode,
    description,
  } = tutor;

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col justify-between max-w-sm w-full">
      
      <div className="relative rounded-2xl overflow-hidden aspect-4/3 w-full mb-4 bg-gray-100">
        <Image
          src={imageUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb'}
          alt={tutorName}
          fill
          className="object-cover"
        />
        
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${teachingMode === 'Online' ? 'bg-emerald-500' : 'bg-blue-500'}`}></span>
          {teachingMode}
        </div>
      </div>

      
      <div className="flex flex-col grow">
        
        
        <div className="mb-2">
          <span className="inline-block bg-[#f0ecfe] text-[#5b3df6] text-xs font-semibold px-3 py-1 rounded-full">
            {subject}
          </span>
        </div>

        
        <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-1">
          {tutorName}
        </h3>

        
        <p className="text-sm text-gray-600 line-clamp-1 mb-3">
          {description.split(',')[0]}
        </p>

        <div className="flex items-center gap-1.5 mb-3 text-sm">
          <div className="flex items-center text-amber-400">
            <Star className="w-4 h-4 fill-current" />
          </div>
          <span className="font-bold text-gray-900">4.98</span>
          <span className="text-gray-400 text-xs">(184 reviews)</span>
        </div>

        <div className="space-y-1.5 text-xs text-gray-500 mb-4 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
          {location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span className="truncate">{location}</span>
            </div>
          )}
          {availableSchedule && (
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span className="truncate">{availableSchedule}</span>
            </div>
          )}
          {totalSlot !== undefined && (
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span>{totalSlot} Slots Available</span>
            </div>
          )}
        </div>

      </div>

      <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
        <div>
          <span className="text-xs text-gray-500 block font-medium">Rate</span>
          <div className="text-xl font-extrabold text-gray-900">
            ${hourlyFee} <span className="text-xs font-normal text-gray-500">/ 60 min</span>
          </div>
        </div>

        <Link
          href={`/all-tutors/${_id}`}
          className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-blue-500/20 transition-all duration-200"
        >
          Book Session
        </Link>
      </div>

    </div>
  );
}