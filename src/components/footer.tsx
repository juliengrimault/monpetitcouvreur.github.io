import React, { PropsWithChildren } from 'react'
import { mdiMapMarker, mdiEmailOutline, mdiPhone } from '@mdi/js';
import Icon from '@mdi/react';
import { CenteredSection } from './section-layout';
import logo from '../images/logo.png'
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className='relative bg-slate-800 text-gray-200 z-0 overflow-hidden'>
      <div className='h-[1px] bg-slate-600'></div>
      <ContactUs/>
      <div className='h-[1px] bg-slate-600'></div>
      <Copyright />

      <motion.img 
        src={logo}
        className='absolute max-w-[150px] z-10 bottom-0 end-0 mix-blend-lighten object-right-bottom opacity-75 max-h-[100%]'
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 2.5,
          delay: 0.1
        }}
      />
    </footer>
  )
}

const ContactUs = () => {
  return (
    <CenteredSection className='py-0'>
      <div className='flex justify-center'>
        <div className='flex flex-col lg:container lg:flex-row lg:divide-x lg:divide-slate-700'>
          <FooterTile icon={mdiMapMarker}>
            <div>
              La Bédorais
              <br />
              St Remy Du Plain, 35123
            </div>
          </FooterTile>

          <FooterTile icon={mdiEmailOutline}>
            <div>
              Email:
              <br />
              <a className='font-bold' href='mailto:contact@mpc.com'>contact@mpc.com</a>
            </div>
          </FooterTile>

          <FooterTile icon={mdiPhone}>
            <div>
              Nº Téléphone:
              <br />
              <a className='font-bold' href='tel:0712345678'>07 12 34 56 78</a>
            </div>
          </FooterTile>
        </div>
      </div>
      </CenteredSection>
  )
}

interface FooterTileProps {
 icon: string
}


const FooterTile = (props: PropsWithChildren<FooterTileProps>) => {
  return(
    <div className='flex flex-row gap-4 p-6 items-start lg:basis-full'>
      <div className='bg-slate-700 p-3 rounded-lg'>
        <Icon path={props.icon} size='2.2rem'/>
      </div>
      { props.children }
    </div>
  )
}

const Copyright = () => {
  return (
    <CenteredSection className='py-4'>
      <div className='flex justify-center'>
        <span className='text-slate-400'>© Copyright Mon Petit Couvreur 2024. All right reserved.</span>
      </div>
  </CenteredSection>
  )
}

export default Footer