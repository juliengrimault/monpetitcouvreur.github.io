import Icon from '@mdi/react';
import React, { useState } from "react"
import Service_1 from '../images/Service-1.jpg';
import Service_2 from '../images/Service-2.jpg';
import Service_3 from '../images/Service-3.jpg';
import Service_4 from '../images/Service-4.jpg';
import Service_5 from '../images/Service-5.jpg';
import Service_6 from '../images/Service-6.jpg';
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
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante justo, porta at velit in, posuere congue purus. Cras fermentum vel risus non congue. Phasellus vel semper turpis, quis scelerisque ex. Vestibulum id bibendum sapien. Quisque dapibus fringilla tempus. Nulla ut odio tincidunt, mollis nisi quis, consectetur sapien. Aenean orci magna, ultricies quis justo in, venenatis bibendum lacus. Nulla sagittis urna nec feugiat volutpat. Etiam at mattis nulla. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante justo, porta at velit in, posuere congue purus. Cras fermentum vel risus non congue. Phasellus vel semper turpis, quis scelerisque ex. Vestibulum id bibendum sapien. Quisque dapibus fringilla tempus. Nulla ut odio tincidunt, mollis nisi quis, consectetur sapien. Aenean orci magna, ultricies quis justo in, venenatis bibendum lacus. Nulla sagittis urna nec feugiat volutpat. Etiam at mattis nulla. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
         image: Service_1
      }
  },
  {
      id: "com.mpc.wwd.2",
      title: "Historical\nBuildings",
      icon: mdiChessRook,
      details: {
          title: "Historical Buildings",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum dui id ultricies maximus. Quisque sit amet massa eu justo dignissim consectetur. Duis eros massa, molestie in nulla sit amet, fermentum auctor libero. Nulla vel iaculis risus, ut mattis mauris. Fusce turpis mi, vulputate at dignissim eget, tempor quis metus. Nam pellentesque suscipit massa, at consequat eros tristique quis. In sit amet dolor imperdiet, commodo sapien vel, volutpat nisl. Cras pellentesque fermentum leo, quis gravida ex sagittis ac.",
         image: Service_2
      }
  },
  {
      id: "com.mpc.wwd.3",
      title: "Pose\nVelux",
      icon: mdiWindowClosedVariant,
      details: {
          title: "Pose Velux",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae ligula ac nisl hendrerit imperdiet. Pellentesque porta lectus quis pulvinar gravida. Ut tempus eu diam nec tempus. Nullam sollicitudin pellentesque fringilla. Aliquam quis purus a enim dignissim vulputate lacinia non mi. Sed nec ornare enim, rutrum consectetur ipsum. Suspendisse potenti. Donec nec dolor placerat, venenatis felis ac, vehicula risus. Proin sed mi aliquam, tincidunt dolor ut, rutrum augue. Aenean fermentum neque dolor, ut porta risus bibendum in. Donec et lobortis lectus. Nunc hendrerit sapien ut nisl ultrices, quis iaculis dui bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
         image: Service_3
      }
  },
  {
      id: "com.mpc.wwd.4",
      title: "Roof\nFrame Design",
      icon: mdiRulerSquare,
      details: {
          title: "Roof Frame Design",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc leo mi, faucibus ac commodo eu, auctor efficitur elit. Sed finibus rhoncus nisl vel pharetra. Proin porta tempus ex, interdum lobortis mi interdum porttitor. Sed scelerisque, risus at tristique gravida, massa felis vulputate nulla, quis egestas mi leo sed dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque non metus sit amet ipsum suscipit pellentesque a non nunc. Nulla ullamcorper sed ex nec tincidunt. Nam sed ante ante. Quisque vel nibh mi. Suspendisse tristique enim neque, et rhoncus nisi feugiat non. Nullam eu rhoncus nunc, at dapibus nulla. Maecenas ac mauris quis dolor dictum dictum ut ac ipsum.",
         image: Service_4
      }
  },
  {
      id: "com.mpc.wwd.5",
      title: "Roof\nLayer Fixing",
      icon: mdiHammer,
      details: {
          title: "Roof Layer Fixing",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel velit gravida dui placerat semper. Etiam luctus lectus eu feugiat pulvinar. In at velit tellus. Aliquam mollis sed ligula sed pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. Ut id tortor venenatis, ultricies nunc ut, egestas nulla. Integer malesuada ullamcorper felis, ac egestas dui. Praesent aliquam velit tortor, vitae elementum augue venenatis eleifend. Etiam sit amet dignissim ante. Sed ac cursus ex. Nullam finibus gravida turpis, a imperdiet eros ultrices eu. Maecenas vel aliquet orci. Praesent euismod ut odio pretium efficitur.",
         image: Service_5
      }
  },
  {
      id: "com.mpc.wwd.6",
      title: "Roof\nDamage Repair",
      icon: mdiHomeRoof,
      details: {
          title: "Roof Damage Repair",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur tortor molestie lacus finibus viverra. Vivamus sodales a nulla quis sagittis. Etiam ornare ullamcorper egestas. In fermentum ultricies nunc et euismod. Nunc id est consequat, dapibus mi sit amet, suscipit libero. Phasellus varius, metus sit amet laoreet tempor, sem lacus interdum tellus, ut tincidunt tortor purus sed sapien. Morbi nisi nibh, feugiat ut turpis in, pellentesque ultrices lorem. Aenean sit amet velit maximus massa elementum fermentum at in lorem. Vivamus nec arcu scelerisque, faucibus sapien ut, hendrerit tortor. Mauris eu sodales lacus. Aliquam sit amet accumsan nulla, a porta tortor. Pellentesque sit amet massa orci. Mauris non lectus posuere, semper turpis ut, lacinia lectus. Sed quis mi felis. Nulla pellentesque, augue id malesuada lacinia, ante elit consequat elit, vitae rutrum augue mi ut velit.",
          image: Service_6
      }
  }
]
  
const WhatWeDoSection = () => {
  const [selectedSection, setSelectedSection] = useState(sections[0])
  
  return (
    <section className="bg-slate-800 text-gray-100">
      <div className="container mx-auto">
        <div className="px-5 py-16 flex flex-col gap-4">
          <span className="text-yellow-600 font-bold text-sm">– OUR SERVICES</span>
          <h2 className="text-4xl font-extrabold">What We Do</h2>

          <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</span>

          <ul className="container grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-6">
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

        {
            selectedSection ? 
            <Details {...selectedSection.details } />
            :
              null
        }
        </div>
        
      </div>
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
    md:py-8 md:gap-5
    hover:bg-yellow-600 hover:text-gray-100
    transition duration-300
    `}>
        <Icon path={section.icon} size='5rem' />
        <h3 className='text-xl font-bold text-center'>
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

const Details = (props: SectionDetails) => {
  return (
    <div className='container bg-gray-100 text-black rounded-lg pt-10 pb-5 px-5 gap-5 flex flex-col lg:flex-row lg:gap-8 lg:px-8'>
        <div className='flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>{props.title}</h2>
            <p className='text-lg text-gray-700'>{props.content}</p>
        </div>
        <div className='flex flex-col-reverse' >
          <img className='rounded-lg lg:max-w-60' src={props.image} alt=''/>
        </div>
    </div>
  )
}

export default WhatWeDoSection