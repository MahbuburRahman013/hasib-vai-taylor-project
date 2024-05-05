import React from 'react'
import Slider from './mainHomePageComponents/Slider'
import UnderBanner from './mainHomePageComponents/UnderBanner'
import TaylorSec from './mainHomePageComponents/TaylorSec'
import SubjectArea from './mainHomePageComponents/SubjectArea'

function Home() {
  return (
    <div>
      <Slider />
      <UnderBanner />
      <TaylorSec />
      <SubjectArea />
    </div>
  )
}

export default Home