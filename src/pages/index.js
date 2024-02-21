import * as React from "react"
import Layout from '../components/layout'
import Slide_v1 from '../images/Slide_v1.jpg';
import WhatWeDoTile from "../components/what-we-do-tile";
import {
  faHouse,
  faRulerCombined,
  faHammer,
  faHouseChimneyCrack,
  faLandmarkDome,
  faHouseChimneyWindow
} from '@fortawesome/free-solid-svg-icons'

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDoSection />
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

const WhatWeDoSection = () => {
  return (
    <section className="bg-slate-800 text-gray-100">
    <div className="container mx-auto">
      <div className="px-5 py-16 flex flex-col gap-4">
        <span className="text-yellow-600 font-bold text-sm">– OUR SERVICES</span>
        <h2 className="text-4xl font-extrabold">What We Do</h2>

        <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</span>

        <ul className="container grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-6">
          <WhatWeDoTile title="Roof\nInstalation" icon={faHouse}/>
          <WhatWeDoTile title="Historical\nBuildings" icon={faLandmarkDome}/>
          <WhatWeDoTile title="Pose\nVelux" icon={faHouseChimneyWindow}/>
          <WhatWeDoTile title="Roof\nFrame Design" icon={faRulerCombined}/>
          <WhatWeDoTile title="Roof\nLayer Fixing" icon={faHammer}/>
          <WhatWeDoTile title="Roof\nDamage Repair" icon={faHouseChimneyCrack}/>
      </ul>
      </div>
      
    </div>
    </section>
  )
}

export default IndexPage

export const Head = () => <title>Mon Petit Couvreur</title>
