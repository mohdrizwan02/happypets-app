import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  const images = [
    '/placeholder.svg?height=256&width=176',
    '/placeholder.svg?height=256&width=176',
    '/placeholder.svg?height=256&width=176',
    '/placeholder.svg?height=256&width=176',
    '/placeholder.svg?height=256&width=176',
    '/placeholder.svg?height=256&width=176',
    '/placeholder.svg?height=256&width=176',
  ]

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-[#2F0601] sm:text-5xl">
              Find Your Perfect Companion 
            </h1>
            <p className="mt-4 text-lg text-gray-500">
            "Explore a world of adorable pets looking for loving homes. Happy Pets connects you with companions waiting to bring joy, comfort, and loyalty into your life"
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {images.slice(0, 2).map((src, index) => (
                        <div key={index} className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <Image src={src} alt="" width={176} height={256} className="h-full w-full object-cover object-center" />
                        </div>
                      ))}
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {images.slice(2, 5).map((src, index) => (
                        <div key={index} className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image src={src} alt="" width={176} height={256} className="h-full w-full object-cover object-center" />
                        </div>
                      ))}
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {images.slice(5, 7).map((src, index) => (
                        <div key={index} className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image src={src} alt="" width={176} height={256} className="h-full w-full object-cover object-center" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link href="#" className="inline-block rounded-md border border-transparent bg-[#2F0601] px-8 py-3 text-center font-medium text-white hover:bg-[#2F0601]/80">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}