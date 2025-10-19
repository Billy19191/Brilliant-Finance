'use client'

import { ConnectKitButton } from 'connectkit'
import { useAccount } from 'wagmi'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const logoSource: string = '/brand_logo/navbar_logo.svg'
  const menuItems: string[] = ['Dashboard', 'Lend', 'Borrow', 'Analytics']
  const pathname = usePathname() ?? '/'
  const activeSegment = pathname.replace(/^\/+/, '').split('/')[0]

  const { address } = useAccount()
  return (
    <nav className="inline-flex items-center justify-between w-full p-4 rounded-full  px-20">
      <div className="flex items-center gap-6">
        <Image src={logoSource} alt="logo" width={125} height={20} />
        <ul className="flex flex-row gap-4">
          {menuItems.map((item, index) => {
            const slug = item.toLowerCase()
            const href = `/${slug}`
            const isActive = activeSegment === slug
            return (
              <li key={index}>
                <Link
                  href={href}
                  className={`text-sm ${isActive ? 'font-bold text-4xl' : ''}`}
                >
                  {item}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <ConnectKitButton mode="auto" key={address} />
      </div>
    </nav>
  )
}
