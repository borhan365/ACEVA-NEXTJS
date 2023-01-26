import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'

function SocialMedia({social}) {

  return (
    <ul>
      <li>
        <Link href={social?.facebook}> <BsFacebook /> </Link>
      </li>
      <li>
        <Link href={social?.twitter}> <BsTwitter /> </Link>
      </li>
      <li>
        <Link href={social?.linkedin}> <BsLinkedin /> </Link>
      </li>
      <li>
        <Link href={social?.youtube}> <BsYoutube /> </Link>
      </li>
    </ul>
  )
}

export default SocialMedia