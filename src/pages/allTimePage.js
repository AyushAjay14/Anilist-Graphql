import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const Container = styled.div`
  width: 73%;
  margin: auto;
  justify-content: space-between;
  position: relative;
`;
const Alltime = styled.h4`
  font-size: 1.8em;
  margin-left: 1em;
  justify-self: flex-start;
  font-family: "Overpass", sans-serif;
  color: rgb(94, 115, 128);
  font-weight: 700;
`;
const CardContainer = styled.div`
  display: grid;
  grid-gap: 28px 30px;
  grid-template-columns: repeat(auto-fill, 185px);
`;
const AnimeContainer = styled.div`
  height: 20em;
  width: 12em;
  //   flex: 1.2 0.8;
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

function AlltimePage() {
  const popularAnime = useSelector((state) => state.anime.alltimePage);
  return (
    <>
      <Container>
        <Alltime>All-Time Popular Anime</Alltime>
        <CardContainer>
          {popularAnime &&
            popularAnime.Page.media.map((element) => {
              return (
                <>
                  <AnimeContainer>
                    <ImageContainer>
                      <img src={element?.coverImage?.extraLarge} alt="" />
                    </ImageContainer>
                    <ContentContainer>
                      <Title>{element?.title?.userPreferred}</Title>
                    </ContentContainer>
                  </AnimeContainer>
                </>
              );
            })}
        </CardContainer>
      </Container>
    </>
  );
}

export default AlltimePage;
