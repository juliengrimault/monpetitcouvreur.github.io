import React from "react"
import Layout from '../components/layout'
import Slide_v1 from '../images/Slide_v1.jpg';
import WhatWeDoSection from '../components/what-we-do-section'
import WhyChooseUsSection from '../components/why-choose-us-section'

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDoSection />
      <WhyChooseUsSection />
    </Layout>
  )
}

const HeroSection = () => {
  return (
    <section className="bg-cover bg-top text-gray-100" style={{ backgroundImage: `url(${Slide_v1})` }}>
    <div className="container mx-auto">
      <div className="px-5 flex flex-col justify-center min-h-[45svh] sm:max-w-xl">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-extrabold">We Build Roof Expert Engineers</h2>
          <p>We believe in providing top quality workmanship and are so confident in our level of service that we back it up with a good quality</p>
        </div>
      </div>
    </div>
    </section>
  )
}


export default IndexPage

export const Head = () => <title>Mon Petit Couvreur</title>
