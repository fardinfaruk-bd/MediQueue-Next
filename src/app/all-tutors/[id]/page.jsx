import BookSessionModal from "@/components/BookSessionModal";
import { auth } from "@/lib/auth";
import { getTutorById } from "@/lib/data";
import { Card } from "@heroui/react";
import { BookOpen, Briefcase, Building2, Calendar, CheckCircle2, ChevronRight, Clock, Home, MapPin, MessageSquare, Users } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdVerified } from "react-icons/md";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const tutor = await getTutorById(id);

  return {
    title: tutor.tutorName + " - MediQueue",
    description:
      "MediQueue is a Best Online Platform to Connect with Top Tutors and Students for Personalized Learning Experiences.",
  };
};

const AllDetailsPage = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const { id } = await params;
  const tutorDetails = await getTutorById(id);

  if (!tutorDetails) {
    return <div className="text-center py-20 text-gray-600 font-medium">Tutor not found</div>;
  }

  return (
    <div className="bg-[#faf9fe] min-h-screen py-8 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-8 font-medium">
          <Link href="/" className="hover:text-blue-600 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/all-tutors" className="hover:text-blue-600">
            Tutors
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-400">{tutorDetails.subject}</span>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-semibold">{tutorDetails.tutorName}</span>
        </nav>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Profile & Detailed Info */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Tutor Profile Header Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-purple-100 border-4 border-white shadow-md">
                  <Image
                    src={tutorDetails.imageUrl}
                    alt={tutorDetails.tutorName}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-1 right-1 bg-emerald-500 text-white p-1.5 rounded-full ring-4 ring-white">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="bg-[#f0ecfe] text-[#5b3df6] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {tutorDetails.subject}
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {tutorDetails.teachingMode} Mode
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-1 flex items-center gap-1.5">
                  {tutorDetails.tutorName} <MdVerified className="text-blue-600 text-xl" />
                </h1>

                <p className="text-sm text-gray-600 font-medium mb-2 line-clamp-2">
                  {tutorDetails.description}
                </p>

                <p className="text-xs text-gray-500 flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" /> {tutorDetails.location}
                </p>
              </div>
            </div>

            {/* Credentials Grid Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="text-base font-bold text-gray-900 mb-6">
                Teaching Credentials & Highlights
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-50/70 border border-gray-100 rounded-2xl p-4 flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Subject</span>
                    <span className="text-sm font-bold text-gray-900">{tutorDetails.subject}</span>
                  </div>
                </div>

                <div className="bg-gray-50/70 border border-gray-100 rounded-2xl p-4 flex items-center gap-4">
                  <div className="bg-purple-50 p-3 rounded-xl text-purple-600">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Mode</span>
                    <span className="text-sm font-bold text-gray-900">{tutorDetails.teachingMode}</span>
                  </div>
                </div>

                <div className="bg-gray-50/70 border border-gray-100 rounded-2xl p-4 flex items-center gap-4">
                  <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Location</span>
                    <span className="text-sm font-bold text-gray-900 truncate max-w-[120px] block">{tutorDetails.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cohort Schedule & Availability Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-base font-bold text-gray-900">Cohort Schedule & Availability</h3>
                  <p className="text-xs text-gray-500">Scheduled calendar timeline and attendance capacity</p>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full w-fit">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  {tutorDetails.totalSlot} Slots Active
                </span>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 mb-6 space-y-3">
                <div className="flex flex-col sm:flex-row justify-between text-xs text-gray-700 font-semibold gap-1">
                  <span className="flex items-center gap-1.5 text-blue-600">
                    <Calendar className="w-3.5 h-3.5" /> Start Date: {tutorDetails.sessionStartDate}
                  </span>
                  <span className="text-gray-500">End Date: {tutorDetails.sessionEndDate}</span>
                </div>
                <div className="w-full bg-blue-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full w-full"></div>
                </div>
                <div className="flex justify-between text-[11px] text-gray-500 font-medium">
                  <span>Available Timings</span>
                  <span>{tutorDetails.availableSchedule}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Booking & Pricing Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-6">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Hourly Rate</span>
                  <div className="text-3xl font-extrabold text-gray-900 mt-0.5">
                    ${tutorDetails.hourlyFee} <span className="text-xs font-normal text-gray-500">/ hour</span>
                  </div>
                </div>
                <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200/60 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {tutorDetails.totalSlot} slots
                </span>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 mb-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Session Duration</span>
                    <span className="text-xs font-bold text-gray-900">{tutorDetails.sessionStartDate} – {tutorDetails.sessionEndDate}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Schedule Window</span>
                    <span className="text-xs font-bold text-gray-900">{tutorDetails.availableSchedule}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Modality</span>
                    <span className="text-xs font-bold text-gray-900">{tutorDetails.teachingMode}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {tutorDetails.totalSlot === 0 && (
                  <p className="text-red-600 text-xs font-medium text-center">No Slot Available</p>
                )}
                <BookSessionModal tutor={tutorDetails} user={user} />
              </div>

              <div className="space-y-2 pt-4 border-t border-gray-100 text-xs text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Instant Booking Confirmation
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Secure Learning Protection
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AllDetailsPage;