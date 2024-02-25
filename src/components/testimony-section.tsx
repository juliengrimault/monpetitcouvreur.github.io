import Icon from '@mdi/react';
import { mdiFormatQuoteOpenOutline } from '@mdi/js';
import React from "react"
import SectionLayout from './section-layout';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './testimony.module.css'

const TestimonySection = () => {
    const settings = {
        className: "pt-10 pb-15",
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
          ]
      };

  return (
    <section className="bg-slate-800 text-gray-100">
        <SectionLayout
          title="What they're saying about us"
          subtitle='– TESTIMONIALS'
        >
            <Slider {...settings}>
            {
                testimonies.map((t) => <TestimonyTile {...t} />)
            }
            </Slider>
        </SectionLayout>
    </section>
  )
}

const testimonies: Testimony[] = [
    {
        name: 'Robert Dujardin',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Marise Duval',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non nisi.'
    },
    {
        name: 'Pierre Dupont',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
    }
]

interface Testimony {
    name: string
    message: string
}

const TestimonyTile = (props: Testimony) => {
    return (
        // this works in conjuction with the globall.css where we style the react-slick slider's div
        <div className='bg-gray-100 pt-5 pb-10 px-10 rounded-lg h-full'>
            <div className='flex flex-row gap-5 items-center'>
                <Icon path={mdiFormatQuoteOpenOutline} className='fill-yellow-600' color='' size='7rem' />
                <div className='flex flex-col'>
                    <span className='text-slate-900 font-bold text-lg'>{props.name}</span>
                    <span className='text-slate-700 text'>Customer</span>
                </div>
            </div>
            <p className='text-slate-700 text-lg'>{props.message}</p>
        </div>
    )
}

export default TestimonySection