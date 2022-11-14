import React from 'react'
import { HomeFirstSection } from '../../Components/HomeSections/HomeFirstSection/HomeFirstSection'
import "./Home.css"
import { HomeSecondSection } from '../../Components/HomeSections/HomeSecondSection/HomeSecondSection'
import { HomeThirdSection } from '../../Components/HomeSections/HomeThirdSection/HomeThirdSection'
import { HomeFourthSection } from '../../Components/HomeSections/HomeFourthSection/HomeFourthSection'
import { HomeLastSection } from '../../Components/HomeSections/HomeLastSection/HomeLastSection'


export function Home() {
  return (
    <div id='home-main-container'>
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeThirdSection />
      <HomeFourthSection />
      <HomeLastSection />
    </div>
  )
}
