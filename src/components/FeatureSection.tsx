'use client'
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

function FeatureSection() {
    const featurecourses = courseData.courses.filter((courses)=>courses.isFeatured)


  return (
    <div className="py-12 bg-gray-900">
        <div>
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>
        </div>
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featurecourses.map((courses)=> (
                    <div key={courses.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-5 dark:text-neutral-200">{courses.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-5">{courses.description}</p>
                                <Link className="px-4 py-2 rounded-xl border border-neutral-600 text-neutral-700 bg-white hover:scale-110 transition delay-50" href={`/courses/${courses.slug}`}>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-20 text-center">
            <Link href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
            View All courses
            </Link>
        </div>
    </div>
  )
}

export default FeatureSection