import Icon from '@mdi/react';
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react"
import BgImage from '../images/why_choose_us_bg.png'
import { mdiCrowd, mdiMagnify, mdiAccountHardHatOutline, mdiSealVariant } from '@mdi/js';
import SectionLayout from './section-layout';

interface Reason {
  title: string
  icon: string
}

const reasons: Reason[] = [
  {
    title: "Familly Tradition Business",
    icon: mdiCrowd
  },
  {
    title: "We Do Complete Inspection",
    icon: mdiMagnify
  },
  {
    title: "Professional Trained Workers",
    icon: mdiAccountHardHatOutline
  },
  {
    title: "Complete Roof Waranty",
    icon: mdiSealVariant
  },
]

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0,1], [-distance, distance]);
}

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: ref,
    // starts to increase when the top of the `ref` is at the bottom of the viewport
    // reaching 1.0 when the top of the section is at the top of the viewport
    offset: ['start end', 'start start']
  });
  const y = useParallax(scrollYProgress, 20)

  return (
    <section ref={ref} className="relative bg-slate-200 -z-20 overflow-hidden">
      <div className='container mx-auto flex flex-row max-w-6xl'>
        <div className='w-0 lg:w-2/5'></div>
        <SectionLayout
          title='Why Main Reason to Choose Us'
          subtitle='– WHAT REASON TO CHOOSE US'
          details='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.'
          detailsClassName='text-slate-700'
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 pb-7">
            {
              reasons.map((r, idx) => {
                return <Tile
                  key={idx}
                  {...r}
                />
              })
            }
          </ul>
        </SectionLayout>
      </div>
 
      <motion.img
        src={BgImage}
        className='absolute max-w-[100%] -z-10 -bottom-20 start-0 object-left-bottom opacity-15 lg:opacity-100'
        style={{ y }}
        initial={{ x: "-100%" }}
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

const Tile = (props: Reason) => {
  return (
    <li className={`
    bg-gray-100 text-black
    flex flex-row items-center gap-4
    p-4 rounded-lg 
    group hover:bg-yellow-600 hover:text-gray-100 
    transition duration-300
    `}>
      <Icon path={props.icon} className='fill-yellow-600 group-hover:fill-gray-100 transition duration-300' color='' size='4rem' />
      <h3 className='text-l font-bold text-start'>
        {props.title}
      </h3>
    </li>
  )
}

export default WhyChooseUsSection