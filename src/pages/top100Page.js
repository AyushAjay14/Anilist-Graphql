import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const colors = [
  "#3e42f4",
  "#f08d74",
  "#ead686",
  "#869ffc",
  "#d94fff",
  "#a63909",
  "#ab2b54",
  "#b8940f",
  "#49616d",
  "#49a882",
];
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
  position: relative;
`;
const Ranking = styled.div`
  position: absolute;
  border-radius: 50%;
  color: white;
  width: 45px;
  left: -3%;
  top: -4%;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 45px;
  font-size: 1.2em;
  background-color: ${(props) => props.bgd};
  font-family: "Overpass", sans-serif;
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

function Top100AnimePage() {
  const top100Anime = useSelector((state) => state.anime.top100Page);
  return (
    <>
      <Container>
        <Alltime>Top 100 Anime</Alltime>
        <CardContainer>
          {top100Anime &&
            top100Anime.Page.media.map((element, id) => {
              return (
                <>
                  <AnimeContainer>
                    <Ranking bgd={colors[id % 10]}>
                      <p>#{id + 1}</p>
                    </Ranking>
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

export default Top100AnimePage;
