import * as React from 'react'
import Icon from '@mdi/react';

const WhatWeDoTile = ({ title, icon }) => {
  const lines = title.split('\\n');
  return (
    <li className='bg-gray-100 text-black py-3 md:py-8 px-5 flex flex-col items-center gap-3 md:gap-5 rounded-lg hover:bg-yellow-600 hover:text-gray-100'>
        <Icon path={icon} size='5rem' />
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
    </li>
  )
}

export default WhatWeDoTile