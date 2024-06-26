'use client'

import { usePathname, useRouter } from '@/navigation'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Languages } from 'lucide-react'

export function LanguageToggle() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-transparent px-2.5 hover:bg-accent hover:text-accent-foreground">
        <Languages className="size-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => router.push(pathname, { locale: 'en' })}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push(pathname, { locale: 'pt' })}
        >
          Português
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
