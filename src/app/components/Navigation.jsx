'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import style from './Navigation.module.css';

 
const Links = [
    {href: '/', label: 'Home'},
    {href: '/blog', label: 'Blog'},
    {href: '/contact', label: 'Contact'}
];
export default function Navigation(){
    const pathname = usePathname()

    return (
      <nav className="flex justify-end bg-[#071952] p-4 text-white">
        <ul className="flex items-center">
            {Links.map(({ href, label }) => (      
          <li className="mr-8 mb-1" key={href}>
            <Link className={`${style.link} text-gray-400 hover:text-white ${pathname === href ? style.active : ''}`} href={href}>
            {label}
            </Link>
          </li>
            ))}
        </ul>
      </nav>
    )
}