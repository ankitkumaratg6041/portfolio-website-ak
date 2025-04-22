"use client"

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from './ui/button'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

export default function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])
    if (!mounted) {
        // If theme is not mounted, we return null
        // This is important to prevent hydration error
        // because the server and client will have different themes
        return null
    }
    // If the theme is mounted, we can show the UI
    // We can use the resolvedTheme to check the current theme
    // and set the theme button to opposite theme
  return (
      <Button
          size='sm'
          variant='ghost'
          onClick={() => { 
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
          }}
      >
          {
              resolvedTheme === 'dark' ? (
                <SunIcon className='size-4 text-orange-300'/>
              ) : (
                <MoonIcon className='size-4 text-sky-950'/>
              )
          }
          <span className='sr-only'>Toggle Theme</span>

    </Button>
  )
}
