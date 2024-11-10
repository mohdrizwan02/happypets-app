'use client'

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
          question: 'What does "lifetime access" mean exactly?',
          answer: 'Tailwind UI products are a one-time purchase, with no recurring subscription. When you purchase any Tailwind UI product, you have access to all of the content in that product forever.'
        },
        {
          question: 'What does "free updates" include?',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }
      ]
    },
    {
      title: "Compatibility",
      items: [
        {
          question: 'Are Figma, Sketch, or Adobe XD files included?',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          question: 'What JS framework is used?',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          question: 'What version of Tailwind CSS is used?',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          question: 'What browsers are supported?',
          answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
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
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold leading-8 text-indigo-600">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Everything you need to know
            </p>
          </div>
          <div className="divide-y divide-gray-100">
            {faqData.map((section) => (
              <div key={section.title} className="space-y-8 pt-8 first:pt-0">
                <h3 className="text-lg font-semibold leading-8 text-gray-500">
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
                            <span className="text-base font-semibold leading-7 text-indigo-600">
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
      </div>
    </div>
  )
}