
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function About() {
  return (
    <div>
        <Link href="/">
                <a>
                  <Image
                    src="/icon.png"
                    alt="icon principal"
                    height={60}
                    width={60}
                  />
                </a>
              </Link>
    </div>
  )
}

export default About