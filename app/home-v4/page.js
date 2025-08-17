'use client'

import { useEffect, useState } from 'react'
import Aos from 'aos'
import data from '../../src/Data.json'
import About from '../../src/components/About/About'
import Iconbox from '../../src/components/Iconbox/Iconbox'
import Skill from '../../src/components/Skill/Skill'
import Resume from '../../src/components/Resume/ResumeSection'
import BlogSection from '../../src/components/Blog/BlogSection'
import ReviewSection from '../../src/components/Review/ReviewSection'
import Contact from '../../src/components/Contact/Contact'
import PortfolioSection from '../../src/components/Protfolio/PortfolioSection'
import Hero4 from '../../src/components/Hero/Hero4'
import Header from '../../src/components/Header/Header'
import Footer from '../../src/components/Footer/Footer'
import Preloader from '../../src/components/Preloader/Preloader'
import CustomCursor from '../../src/components/CustomCursor/CustomCursor'

export default function HomeV4() {
  const [isLoading, setIsLoading] = useState(true)
  const { heroData, aboutData, serviceData, skillData, portfolioData, blogData, resumeData, reviewData, contactData, socialData, socialData2 } = data

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
      <Hero4 data={heroData.homeFourHero} socialData={socialData2} />
      <About data={aboutData} data-aos="fade-right" />
      <Iconbox data={serviceData} data-aos="fade-right" />
      <Skill data={skillData} data-aos="fade-right" />
      <Resume data={resumeData} />
      <PortfolioSection data={portfolioData} data-aos="fade-right" />
      <ReviewSection data={reviewData} data-aos="fade-right" />
      <BlogSection data={blogData} data-aos="fade-right" />
      <Contact data={contactData} socialData={socialData} data-aos="fade-right" />
      <Footer />
    </>
  )
}
