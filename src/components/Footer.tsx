import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { text: 'Home', href: '../../../../home' },
    { text: 'About Us', href: '../../../../aboutus' },
    { text: 'Contact Us', href: '../../../../contactus' },
    { text : 'Services' , href :'../../../../services'},
    { text: 'Blog', href: '#' },
    
  ]

  return (
    <footer className="px-8 py-10 bg-[#2F0601]">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
          {footerLinks.map((link) => (
            <ul key={link.text}>
              <li>
                <Link
                  href={link.href}
                  className="block antialiased font-sans text-base font-medium text-white transition-colors hover:text-gray-500"
                >
                  {link.text}
                </Link>
              </li>
            </ul>
          ))}
        </div>
        <p className="mt-6 block antialiased font-sans text-sm font-normal text-gray-400">
          Copyright © {currentYear} Happy-Pets
        </p>
      </div>
    </footer>
  )
}