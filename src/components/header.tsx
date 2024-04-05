import { LanguageToggle } from './toggles/language-toggle'
import ThemeToggle from './toggles/theme-toggle'

import { Bot } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between gap-2 border-b border-solid border-gray-300 p-2 dark:border-gray-900 lg:p-4">
      <div className="flex gap-2">
        <Bot />
        <h1>[jc.dev]</h1>
      </div>
      <div className="flex gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}
