import Link from 'next/link'

import { useTranslations } from 'next-intl'

import Header from '@/components/header'
import Tyspewriter from '@/components/typewriter'
import { Button } from '@/components/ui/button'

import { ArrowDown } from 'lucide-react'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <div className="">
      <Header />
      <section id="home">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center sm:py-32 md:flex-row md:space-x-4 md:pb-72 md:pt-52 md:text-left">
          <div className="md:mt-2 md:w-4/5">
            <h1 className="mt-6 text-4xl font-bold md:mt-0 md:text-7xl">
              <Tyspewriter title={t('Title')} />
            </h1>
            <p className="mb-6 mt-4 text-lg md:text-2xl">
              {t('description')}
              <span className="font-semibold text-purple-600">
                {t('description2')}
              </span>
              {t('description3')}
            </p>

            <Link href="">
              <Button className="hover:bg-purpleDark flex items-center rounded bg-purple-600 px-6 py-3 font-semibold text-neutral-100 shadow">
                Skills
                <ArrowDown size={15} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center text-center ">
          <Link href="">
            <ArrowDown size={35} className="animate-bounce text-purple-600" />
          </Link>
        </div>
      </section>
    </div>
  )
}
