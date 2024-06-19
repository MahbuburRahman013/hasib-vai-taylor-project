import React from 'react'
import { useParams } from 'react-router-dom';

function DynamicContent() {
const {title} = useParams();
const dynamicTitle = title.split('-').join(' ');


  return (
    <div className='h-screen  flex justify-center items-center text-2xl'>
      {
        dynamicTitle
      }
    </div>
  )
}

export default DynamicContent