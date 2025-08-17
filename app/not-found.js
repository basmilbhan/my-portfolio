'use client'

import { useEffect, useState } from 'react'
import Aos from 'aos'
import Page404 from '../src/components/404/Page404'
import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import Preloader from '../src/components/Preloader/Preloader'
import CustomCursor from '../src/components/CustomCursor/CustomCursor'

export default function NotFound() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    Aos.init({ once: true })
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <>
      <CustomCursor />
      <Header />
      <div className="st-height-b80 st-height-lg-b80"></div>
      <Page404 />
      <Footer />
    </>
  )
}
