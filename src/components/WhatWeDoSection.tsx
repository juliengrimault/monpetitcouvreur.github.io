import Icon from '@mdi/react';
import { motion } from "framer-motion";
import React, { useState } from "react"
import Service_1 from '../images/Service-1.jpg';
import Service_2 from '../images/Service-2.jpg';
import Service_3 from '../images/Service-3.jpg';
import Service_4 from '../images/Service-4.jpg';
import Service_5 from '../images/Service-5.jpg';
import Service_6 from '../images/Service-6.jpg';
import BgImage from '../images/what_we_do_section_bg.jpg'
import { mdiHomeRoof, mdiHomeOutline, mdiChessRook, mdiWindowClosedVariant, mdiRulerSquare, mdiHammer } from '@mdi/js';

interface Section {
  id: string
  title: string
  icon: string
  details: SectionDetails
}

interface SectionDetails {
  title: string
  content: string
  image: string
}

const sections: Section[] = [
    {
      id: "com.mpc.wwd.1",
      title: "Roof\nInstalation",
      icon: mdiHomeOutline,
      details: {
          title: "Roof Instalation",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis iaculis ante feugiat dignissim. Suspendisse vitae posuere velit. Sed eu mollis enim, vel rutrum nisi. Ut diam nunc, maximus a ullamcorper volutpat, rhoncus id metus. Curabitur mattis porta lectus, sed tristique libero lobortis eu. Cras venenatis tempus mauris, non vestibulum.",
         image: Service_1
      }
  },
  {
      id: "com.mpc.wwd.2",
      title: "Historical\nBuildings",
      icon: mdiChessRook,
      details: {
          title: "Historical Buildings",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis iaculis ante feugiat dignissim. Suspendisse vitae posuere velit. Sed eu mollis enim, vel rutrum nisi. Ut diam nunc, maximus a ullamcorper volutpat, rhoncus id metus. Curabitur mattis porta lectus, sed tristique libero lobortis eu. Cras venenatis tempus mauris, non vestibulum.",
         image: Service_2
      }
  },
  {
      id: "com.mpc.wwd.3",
      title: "Pose De\nVelux",
      icon: mdiWindowClosedVariant,
      details: {
          title: "Pose Velux",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis iaculis ante feugiat dignissim. Suspendisse vitae posuere velit. Sed eu mollis enim, vel rutrum nisi. Ut diam nunc, maximus a ullamcorper volutpat, rhoncus id metus. Curabitur mattis porta lectus, sed tristique libero lobortis eu. Cras venenatis tempus mauris, non vestibulum.",
         image: Service_3
      }
  },
  {
      id: "com.mpc.wwd.4",
      title: "Roof\nDesign",
      icon: mdiRulerSquare,
      details: {
          title: "Roof Design",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis iaculis ante feugiat dignissim. Suspendisse vitae posuere velit. Sed eu mollis enim, vel rutrum nisi. Ut diam nunc, maximus a ullamcorper volutpat, rhoncus id metus. Curabitur mattis porta lectus, sed tristique libero lobortis eu. Cras venenatis tempus mauris, non vestibulum.",
         image: Service_4
      }
  },
  {
      id: "com.mpc.wwd.5",
      title: "Roof\nLayer Fixing",
      icon: mdiHammer,
      details: {
          title: "Roof Layer Fixing",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis iaculis ante feugiat dignissim. Suspendisse vitae posuere velit. Sed eu mollis enim, vel rutrum nisi. Ut diam nunc, maximus a ullamcorper volutpat, rhoncus id metus. Curabitur mattis porta lectus, sed tristique libero lobortis eu. Cras venenatis tempus mauris, non vestibulum.",
         image: Service_5
      }
  },
  {
      id: "com.mpc.wwd.6",
      title: "Damage\nRepair",
      icon: mdiHomeRoof,
      details: {
          title: "Roof Damage Repair",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis iaculis ante feugiat dignissim. Suspendisse vitae posuere velit. Sed eu mollis enim, vel rutrum nisi. Ut diam nunc, maximus a ullamcorper volutpat, rhoncus id metus. Curabitur mattis porta lectus, sed tristique libero lobortis eu. Cras venenatis tempus mauris, non vestibulum.",
          image: Service_6
      }
  }
]
  
const WhatWeDoSection = () => {
  const [selectedSection, setSelectedSection] = useState(sections[0])
  
  return (
    <section className="relative bg-slate-800 text-gray-100">
      <div className="container mx-auto">
        <div className="px-5 py-16 flex flex-col gap-4">
          <span className="text-yellow-600 font-bold text-sm">– OUR SERVICES</span>
          <h2 className="text-4xl font-extrabold">What We Do</h2>

          <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</span>

          <ul className="container grid grid-cols-2 gap-6 pt-5 pb-7 md:grid-cols-3 lg:grid-cols-6">
            {
              sections.map((s) => {
                return <Tile
                  key={ s.id }
                  section={s}
                  onClick={ ()=> { setSelectedSection(s) } }
                  isSelected={ s === selectedSection }
                />
              })
            }
        </ul>

        <Details id={ selectedSection.id } details={ selectedSection.details } />
        </div>
      </div>
      <motion.img 
        src={BgImage}
        className='absolute bottom-0 end-0 mix-blend-lighten object-right-bottom opacity-15'
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 2.5,
          delay: 0.1
        }}
      />
      
    </section>
  )
}

interface TileProps {
  section: Section
  onClick: () => void
  isSelected: boolean
}

const Tile = ({ section, onClick, isSelected = false }: TileProps) => {
  const lines = section.title.split('\\n');
  
  return (
    <button onClick={onClick} className={`
    ${isSelected ? 'bg-yellow-600' : 'bg-gray-100'} ${ isSelected ? 'text-gray-100' : 'text-black'}
    flex flex-col items-center
    rounded-lg
    py-3 px-5 gap-3 
    lg:py-6 lg:gap-5
    hover:bg-yellow-600 hover:text-gray-100
    transition duration-300
    `}>
        <Icon path={section.icon} size='4rem' />
        <h3 className='text-l font-bold text-center'>
            {
                lines.map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))
            }
        </h3>
    </button>
  )
}

interface DetailsProps {
  id: string
  details: SectionDetails
}
const Details = (props: DetailsProps) => {
  return (
    <motion.div
      key={props.id}
      className='container bg-gray-100 text-black rounded-lg pt-10 pb-5 px-5 gap-5 flex flex-col lg:flex-row lg:gap-8 lg:px-8'
      initial={{ scaleY: 0.9 }}
      animate={{ scaleY: 1.0 }}
      transition={{ duration: 0.3 }}
    >
        <div className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>{props.details.title}</h2>
            <p className='text-lg text-gray-700'>{props.details.content}</p>
        </div>
        <div className='flex flex-col-reverse' >
          <img className='rounded-lg lg:max-w-60' src={props.details.image} alt=''/>
        </div>
    </motion.div>
  )
}

export default WhatWeDoSection