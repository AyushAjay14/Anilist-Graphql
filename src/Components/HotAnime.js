import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  width: 100%;
  height: 59vh;
  position: relative;
`;
const ViewAll = styled.div`
  position: absolute;
  right: 15%;
  top: 8%;
  a{
    font-size: 0.9em;
    text-decoration: none;
    color: inherit;
  }
`
const Trending = styled.h4`
    font-size: 25px;
    font-weight: 400;
    margin-left: 7.5em;
    justify-self: flex-start;
    color: rgb(94,115,128);
    text-transform: uppercase;
`
const TrendContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const AnimeContainer = styled.div`
  height: 20em;
  width: 12em;
  margin: 2em 1.5em;
`;
const ImageContainer = styled.div`
  img {
    height: 280px;
    width: 200px;
    border-radius: 5px;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.p`
  padding-top: 4px;
  font-size: 0.9em;
  align-self: flex-start;
`;
function HotAnime() {
  const animePage = useSelector((state) => state.anime.animePage);
  

  return (
    <>
      <Container>
      <ViewAll><a href="/">View All</a></ViewAll>
        <Trending>Trending Now</Trending>
        <TrendContainer>
          {animePage &&
            animePage.Page.mediaTrends.slice(0, 5).map((element) => {
              return (
                <>
                  <AnimeContainer>
                    <ImageContainer>
                      <img src={element?.media.coverImage?.extraLarge} alt="" />
                    </ImageContainer>
                    <ContentContainer>
                      <Title>{element?.media.title?.userPreferred}</Title>
                    </ContentContainer>
                  </AnimeContainer>
                </>
              );
            })}
        </TrendContainer>
      </Container>
    </>
  );
}

export default HotAnime;
