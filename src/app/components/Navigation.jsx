'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import style from './Navigation.module.css';

 
const Links = [
    {href: '/', label: 'Home'},
    {href: '/blog', label: 'BlogII'},
    {href: '/contact', label: 'Contact'}
];
export default function Navigation(){
    const pathname = usePathname()

    return (
      <nav className="fixed h-full p-4 bg-opacity-50 backdrop-blur-lg">
      <ul className="flex flex-col items-end space-y-4">
        {Links.map(({ href, label }) => (
          <li key={href}>
            <Link
              className={`text-white hover:text-blue-800 transition-colors duration-300 ${pathname === href ? style.active : ''}`}
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>    
    )
}