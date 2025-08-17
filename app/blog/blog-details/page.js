'use client'

import { useEffect, useState } from 'react'
import Aos from 'aos'
import BlogDetails from '../../../src/components/Blog/BlogDetails'
import Header from '../../../src/components/Header/Header'
import Footer from '../../../src/components/Footer/Footer'
import Preloader from '../../../src/components/Preloader/Preloader'
import CustomCursor from '../../../src/components/CustomCursor/CustomCursor'

export default function BlogDetailsPage({ blog }) {
  const [isLoading, setIsLoading] = useState(true)
  console.log(blog)
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
      <BlogDetails blog={blog} />
      <Footer />
    </>
  )
}
