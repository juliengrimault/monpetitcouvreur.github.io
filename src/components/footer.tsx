import React, { PropsWithChildren } from 'react'
import { mdiMapMarker, mdiEmailOutline, mdiPhone } from '@mdi/js';
import Icon from '@mdi/react';
import { CenteredSection } from './section-layout';

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-gray-200'>
      <div className='h-[1px] bg-slate-600'></div>
      <ContactUs/>
      <div className='h-[1px] bg-slate-600'></div>
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
              54B, Tailstoi Town 5238 MT
              <br />
              La city, IA 522364
            </div>
          </FooterTile>

          <FooterTile icon={mdiEmailOutline}>
            <div>
              Email us:
              <br />
              <a className='font-bold' href='mailto:contact@mpc.com'>contact@mpc.com</a>
            </div>
          </FooterTile>

          <FooterTile icon={mdiPhone}>
            <div>
              Call us at:
              <br />
              <a className='font-bold' href='tel:80012345678'>+1 800 123 45678</a>
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

export default Footer