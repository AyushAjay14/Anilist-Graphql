import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Container = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  width: 73%;
  margin: auto;
  justify-content: space-between;
  position: relative;
`;
const Trending = styled.h4`
  font-size: 1.8em;
  margin-left: 1em;
  justify-self: flex-start;
  font-family: "Overpass", sans-serif;
  color: rgb(94, 115, 128);
  font-weight: 700;
`;
const TrendContainer = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  display: grid;
  grid-gap: 28px 30px;
  grid-template-columns: repeat(auto-fill, 185px);
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
function HotAnimePage() {
  const animePage = useSelector((state) => state.anime.animePage);

  return (
    <>
      <Container>
        <Trending>Trending Anime</Trending>
        <TrendContainer>
          {animePage &&
            animePage.Page.mediaTrends.map((element) => {
              return (
                <>
                  <AnimeContainer>
                    <ImageContainer>
                      <LazyLoadImage
                        alt="Product image"
                        height={280}
                        src={element?.media.coverImage?.extraLarge}
                        effect="blur"
                        width={200}
                      />
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

export default HotAnimePage;
