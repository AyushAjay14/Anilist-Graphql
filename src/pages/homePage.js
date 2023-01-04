import React from "react";
import styled from 'styled-components'
import AlltimeAnime from "../Components/AlltimeAnime";
import Hero from "../Components/Hero";
import HotAnime from "../Components/HotAnime";
import PopularAnime from "../Components/PopularAnime";
import Top100 from "../Components/Top100";
import GetData from "../graphql/anime/getData";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(237,241,245);
`
function HomePage() {
  return (
    <>
    <GetData/>
    <Container>
    <Hero/>
    <HotAnime/>
    <PopularAnime/>
    <AlltimeAnime/>
    <Top100/>
    </Container>
    </>
  )
}

export default HomePage;
