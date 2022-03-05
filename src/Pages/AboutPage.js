import React from 'react'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layout'
import Profile from '../Components/Profile'
import ArtCard from '../Components/ArtCard'

const AboutPage = () => {
  return (
    <>
    <MainLayout>
            <Title title={'About me'} span={'About me'}/>
              <InnerLayout>
                <Profile/> 
                </InnerLayout>
            <Title title={'Art Station'} span={'Art Station'}/>
              <InnerLayout>
                <ArtCard/>
                </InnerLayout>
             
    </MainLayout>
    </>
  )
}


export default AboutPage