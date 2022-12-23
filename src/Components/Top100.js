import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const colors = [
  "rgb(239,93,93)",
  "rgb(52,128,234)",
  "rgb(227,79,133)",
  "rgb(224,213,158)",
  "rgb(235,182,45)",
  "rgb(138,44,15)",
];
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  /* align-items: center; */
`;
const ViewAll = styled.div`
  position: absolute;
  right: 15%;
  top: 1%;
  a{
    font-size: 0.9em;
    text-decoration: none;
    color: inherit;
  }
`
const Top = styled.h4`
  font-size: 25px;
  font-weight: 400;
  margin-left: 7.5em;
  /* align-self: flex-start; */
  color: rgb(94, 115, 128);
  text-transform: uppercase;
`;
const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SmallContainer = styled.div`
  display: flex;
  width: 74%;
  margin: 0.8em 0;
  align-items: center;
`;
const Number = styled.p`
  font-size: 1.2em;
  margin: 0 0.9em;
  color: rgb(100, 135, 135);
  width: 40px;
`;
const RestDiv = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  img {
    height: 80px;
    width: 65px;
  }
`;
const Info = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 100%;
`;
const TitleCOntainer = styled.div`
  width: 55%;
  margin-left: 32px;
`;
const Title = styled.p`
  font-size: 1.1em;
  font-weight: 500;
  color: rgb(94, 115, 128);
`;
const SpanContainer = styled.div`
  margin-top: 5px;
`;
const Span = styled.button`
  border-radius: 10px;
  font-size: 0.71em;
  width: 6.4em;
  height: 1.2em;
  border: none;
  margin: 0 0.5em;
  background-color: ${(props) => colors[props.index]};
  color: white;
  padding-bottom: 2px;
`;
const Review = styled.div`
  width: 22.5%;
  display: flex;
`;
const Percent = styled.p`
  color: rgb(100, 125, 130);
  padding: 0 0.5em;
`;
const Airing = styled.div`
  width: 22.5%;
`;
const Date = styled.div`
  padding: 0 0.5em;
`;
function Top100() {
  const top100Anime = useSelector((state) => state.anime.top100Page);

  // const isEmptyAnimePage =
  // !top100Anime || !top100Anime.media || top100Anime.media.length === 0;
  // if (isEmptyAnimePage) return <div>Loading...</div>;

  return (
    <>
      <Container>
        <ViewAll><a href="/">View All</a></ViewAll>
        <Top>Top 100</Top>
        <TableContainer>
          {top100Anime?.Page.media.slice(0, 10).map((element, id) => {
            return (
              <>
                <SmallContainer>
                  <Number>#{id + 1}</Number>
                  <RestDiv>
                    <img src={element.coverImage.medium} alt="" />
                    <Info>
                      <TitleCOntainer>
                        <Title>{element.title.userPreferred}</Title>
                        <SpanContainer>
                          {element.genres.map((genre, id) => {
                            return <Span index={id}>{genre}</Span>;
                          })}
                        </SpanContainer>
                      </TitleCOntainer>
                      <Review>
                        <i
                          class="bx bx-smile bx-sm"
                          style={{ color: "#62d062" }}
                        ></i>
                        <Percent>{element.averageScore}%</Percent>
                      </Review>
                      <Airing>
                        <Percent>{element.startDate.year}</Percent>
                        <Date>
                          {element.endDate.year ? "Finished" : "Airing"}
                        </Date>
                      </Airing>
                    </Info>
                  </RestDiv>
                </SmallContainer>
              </>
            );
          })}
        </TableContainer>
      </Container>
    </>
  );
}

export default Top100;
