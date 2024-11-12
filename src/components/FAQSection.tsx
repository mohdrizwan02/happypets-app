'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSection {
  title: string
  items: FAQItem[]
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    'lifetime-access': true // First item open by default
  })

  const faqData: FAQSection[] = [
    {
      title: "General",
      items: [
        {
          question: 'What is Happy Pets?',
          answer: 'Happy Pets is an online platform designed to connect people looking to adopt pets with individuals and shelters offering animals for adoption. We make it easy to find, learn about, and adopt your perfect companion.'
        },
        {
          question: 'Is Happy Pets free to use',
          answer: 'Yes! Browsing, listing, and adopting pets through Happy Pets is completely free. We believe in helping as many pets find loving homes as possible without any barriers.'
        }
      ]
    },
    {
      title: "Pet Adoption Process",
      items: [
        {
          question: 'How does the pet adoption process work on Happy Pets?',
          answer: ' Simply browse our listings, select a pet you\'re interested in, and reach out to the pet\'s owner or shelter to arrange a meet-up or adoption visit. Once approved, you can start your journey with your new companion.'
        },
        {
          question: ' Are there any requirements to adopt a pet?',
          answer: 'Each pet may have specific adoption requirements set by the owner or shelter, such as home visits, background checks, or pet care experience. We recommend contacting the listing directly for details.'
        },
        {
          question: 'Can I adopt more than one pet? ',
          answer: 'Absolutely! You’re welcome to adopt as many pets as you’re able to care for. Each pet listing may have unique requirements, so check with the owner or shelter to ensure a smooth adoption process.'
        }
      ]
    }
  ]

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div className="px-6 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold leading-8 text-[#ee6365]" >
              Frequently asked questions
            </h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Everything you need to know
            </p>
            
          </div>
          <div className="divide-y divide-gray-100">
            {faqData.map((section) => (
              <div key={section.title} className="space-y-8 pt-8 first:pt-0">
                <h3 className="text-lg font-semibold leading-8 text-[#ee6365]">
                  {section.title}
                </h3>
                <dl className="space-y-6">
                  {section.items.map((item) => {
                    const id = item.question.toLowerCase().replace(/\s+/g, '-')
                    return (
                      <div key={id}>
                        <dt>
                          <button
                            className="flex w-full items-start justify-between text-left"
                            onClick={() => toggleItem(id)}
                          >
                            <span className="text-base font-semibold leading-7 text-[#2F0601]">
                              {item.question}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {openItems[id] ? (
                                <Minus className="h-6 w-6 text-indigo-600" />
                              ) : (
                                <Plus className="h-6 w-6 text-indigo-600" />
                              )}
                            </span>
                          </button>
                        </dt>
                        {openItems[id] && (
                          <dd className="mt-2 pr-12">
                            <p className="text-base leading-7 text-gray-600">
                              {item.answer}
                            </p>
                          </dd>
                        )}
                      </div>
                    )
                  })}
                </dl>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 text-center text-lg font-semibold leading-8 text-[#ee6365]">
            Can’t find the answer you’re looking for ?<span> Reach out to our</span> 
            <Link href='../../../../contactus' className='ml-2 underline hover:text-[#2F0601]'>
             customer support team.
            </Link>
            </p>
      </div>
    </div>
  )
}