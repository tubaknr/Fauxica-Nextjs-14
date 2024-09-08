import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
          <a href="#" className="logo">
            <Image src="/images/logo.svg" alt="Logo" width={100} height={50} />
          </a>
          <nav>
            <ul>
            <li><a href="/" className="active">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
  )
}



