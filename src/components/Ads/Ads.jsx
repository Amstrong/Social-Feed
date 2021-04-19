import React from 'react'
import {Section, Information,Img, SectionImg, Title, Parragraph, Soft} from "./Ads.styles"
import AdsImg from "../../assets/images/ads.png"
export default function Ads() {
    return (
        <Section>
            <Information>
            <Soft>WHY IT IS IMPORTANT</Soft>
            <Title>Knowing Your Online Ads Readiness Raiting...</Title>
            <Parragraph>
            ...will help you understand just how bullish you should be with your ad spend and where your blind spots are.</Parragraph>
            <Parragraph>When it comes to online advertising the more informed and ready you are, the more effective your advertising will be (and the greater your chances of a healthy Return on your Ad Spend (ROAS)).</Parragraph>
            <Parragraph>Find Out your Online Advertising Readiness Rating so you can make more money and avoid risks with your online advertising. </Parragraph>
            
            </Information>
            <SectionImg>
                <Img src={AdsImg} alt="Ads"/>
            </SectionImg>
            
        </Section>
    )
}
