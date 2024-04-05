'use client'

import { Typewriter } from 'react-simple-typewriter'

export default function Tyspewriter({ title }: { title: string }) {
  return (
    <Typewriter
      words={[`${title}`, 'FrontEndDeveloper.tsx', '<Software Engineer />']}
      cursor
      cursorColor="#F7ABDA"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  )
}
