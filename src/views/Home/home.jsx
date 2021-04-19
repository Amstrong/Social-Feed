import React from 'react'
import Header from "../../components/Header/Header"
import Partners from "../../components/Partners/Partners"
import Footer from "../../components/Footer/Footer"
import Ads from "../../components/Ads/Ads"
import Rating from "../../components/Rating/Rating"
import {Background, BackgroundConfig} from "./home.styles"
import Card from "../../components/Card/CardLogic"
import LastUpdate from "../../components/LastUpdate/lastUpdate"
export default function home() {
    return (
        <>
        <Header/>
        <Partners/>
        <BackgroundConfig>
        <LastUpdate/>
        </BackgroundConfig  >
        <Background>
                 <Card/>
        </Background>
        <Ads/>
        <Rating/>
        <Footer/>
        </>
    )
}
