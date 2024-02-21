import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WhatWeDoTile = ({ title, icon }) => {
  const lines = title.split('\\n');
  return (
    <li className='bg-gray-100 text-black py-8 px-5 flex flex-col items-center gap-5 rounded-lg hover:bg-yellow-600 hover:text-gray-100'>
        <FontAwesomeIcon icon={icon} size="4x" />
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