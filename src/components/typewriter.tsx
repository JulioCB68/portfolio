'use client'

import { Cursor, useTypewriter } from 'react-simple-typewriter'

export default function Typewriter({ title }: { title: string }) {
  const [text] = useTypewriter({
    words: [`${title}`, 'FrontEndDeveloper.tsx', '<Software Engineer />'],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <>
      <span>{text}</span>
      <Cursor cursorColor="#F7ABDA" />
    </>
  )
}
