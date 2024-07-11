import Icon from '@mdi/react';
import { mdiFormatQuoteOpenOutline } from '@mdi/js';
import React, { useRef } from "react"
import { CenteredSection, SectionHeader} from './section-layout';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TestimonySection = () => {
    const ref = useRef(null)

    const responsive = {
        large: {
            breakpoint: { max: 3000, min: 600 },
            items: 2,
        },
        small: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
        }
    }
    
  return (
    <section className="bg-slate-800 text-gray-100">
         <CenteredSection>
         <div className='flex flex-col items-start gap-4 lg:flex-row lg:align-top lg:gap-2'>
                <div className='lg:basis-4/12'>
                    <SectionHeader title="What they're saying about us" subtitle='– TESTIMONIALS'>
                        <div className='flex flex-row gap-8 lg:pt-5'>
                            <Button text='&larr;' onClick={ () => ref.current?.previous()  } />
                            <Button text='&rarr;' onClick={ () => ref.current?.next() } />
                        </div>
                    </SectionHeader>
                </div>
                <Carousel ref={ ref }
                 className="w-full lg:w-8/12"
                 responsive={responsive}
                 partialVisible={true}
                 infinite={true}
                 autoPlay={true}
                 autoPlaySpeed={3000}
                 arrows={false}
                 containerClass="carousel-container"
                 itemClass="carousel-item"
                >
                {
                    testimonies.map((t, idx) => <TestimonyTile key={idx} {...t} />)
                }
                </Carousel>
            </div>
         </CenteredSection>       
    </section>
  )
}

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button = (props: ButtonProps) => {
    return (
        <button className='
            w-[50px] h-[50px] ring-1 ring-inset ring-slate-300 text-slate-300 rounded-full text-4xl
            hover:bg-yellow-600 transition duration-300'
            onClick={props.onClick}>
            {props.text}
        </button>
    )
}

const testimonies: Testimony[] = [
    {
        name: 'Robert Dujardin',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Marise Duval',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '
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
        <div className='bg-gray-100 pt-5 pb-5 px-10 me-4 rounded-lg h-full lg:me-6 lg:ms-0'>
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