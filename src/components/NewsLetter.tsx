'use client'
import React from 'react';

export default function NewsLetter() {
  return (
    <div className=" relative w-full overflow-hidden bg-white py-12 sm:py-24 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-[#2F0601]">
              Subscribe to our newsletter
            </h2>
            <p className="mt-4 text-lg text-[#2F0601]/90">
            Subscribe to our newsletter to get the latest tips, articles, and updates about keeping your furry friends healthy and happy.</p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-[#2F0601] shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-[#2F0601]  sm:text-sm"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-[#2F0601] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-[#2F0601] hover:ring-2 hover:ring-[#2F0601]  "
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-[#2F0601]/60 p-2 ring-1 ring-[#2F0601] transition-all hover:bg-[#2F0601]  hover:text-white">
                <svg
                  className="h-6 w-6  hover:text-white "
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
              </div>
              <dt className="mt-4 text-base font-semibold text-[#2F0601]">
                Weekly articles
              </dt>
              <dd className="mt-2 text-base text-[#2F0601]/90">
              Get pet care tips, heartwarming stories, and expert advice every week. Enrich your pet’s life !
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-[#2F0601]/60 p-2 ring-1 ring-[#2F0601] transition-all hover:bg-[#2F0601]  hover:text-white">
                <svg
                  className="h-6 w-6 hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
                  />
                </svg>
              </div>
              <dt className="mt-4 text-base font-semibold text-[#2F0601]">
                No spam
              </dt>
              <dd className="mt-2 text-base text-[#2F0601]/90">
              We respect your inbox—only valuable pet content. Just pure pet love, delivered straight to you!
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

