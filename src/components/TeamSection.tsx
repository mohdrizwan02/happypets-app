export default function TeamSection() {
    const teamMembers = [
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        image: '/placeholder.svg?height=400&width=400',
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        twitter: '#',
        linkedin: '#'
      },
      {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image: '/placeholder.svg?height=400&width=400',
        bio: 'Turpis lectus et amet elementum. Mi duis integer sed in vitae consequat. Nam vitae, in felis mi dui tempus. Porta at turpis eu odio. Et, sed duis in blandit bibendum accumsan. Purus viverra facilisi suspendisse quis est.',
        twitter: '#',
        linkedin: '#'
      }
    ]
  
    return (
      <section className="px-6 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              About the team
            </h2>
            <p className="mt-4 text-lg text-gray-600 sm:mt-6">
              We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
            </p>
          </div>
  
          {/* Team Members */}
          <div className="mt-16 space-y-24 sm:mt-24 lg:mt-32">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="relative">
                {/* Mobile Layout (stacked) */}
                <div className="sm:hidden">
                  <div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full max-w-xs mx-auto rounded-2xl object-cover aspect-square"
                    />
                    <h3 className="mt-8 text-2xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-600">
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm text-gray-600">
                      {member.bio}
                    </p>
                    <div className="mt-6 flex gap-6">
                      <a
                        href={member.twitter}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                      <a
                        href={member.linkedin}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
  
                {/* Tablet/Desktop Layout (side by side) */}
                <div className="hidden sm:grid sm:grid-cols-3 sm:gap-8 lg:gap-16">
                  <div className={`sm:col-span-1 ${index % 2 === 1 ? 'sm:order-2' : ''}`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full max-w-sm mx-auto rounded-2xl object-cover aspect-square"
                    />
                  </div>
                  <div className={`sm:col-span-2 flex flex-col justify-center ${index % 2 === 1 ? 'sm:order-1' : ''}`}>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-base text-gray-600 lg:text-lg">
                        {member.role}
                      </p>
                      <p className="mt-6 text-base text-gray-600 lg:text-lg">
                        {member.bio}
                      </p>
                      <div className="mt-6 flex gap-6">
                        <a
                          href={member.twitter}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                        <a
                          href={member.linkedin}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }