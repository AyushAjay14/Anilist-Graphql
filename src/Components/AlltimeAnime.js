import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import {Link , useNavigate} from 'react-router-dom'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2em;
    position: relative;
`
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
const Alltime = styled.h4`
    font-size: 25px;
    font-weight: 400;
    margin-left: 7.5em;
    /* align-self: flex-start; */
    color: rgb(94,115,128);
    text-transform: uppercase;
`
const CardContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
`
const AnimeContainer = styled.div`
  height: 20em;
  width: 12em;
//   flex: 1.2 0.8;
  margin: 2em 1.5em;
`;
const ImageContainer = styled.div`
    img{
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

function AlltimeAnime() {
    const popularAnime = useSelector((state) => state.anime.alltimePage);
    const navigate = useNavigate();
  return (
    <>
    <Container>
    <ViewAll><Link to="/alltime">View All</Link></ViewAll>
        <Alltime>All time Popular</Alltime>
        <CardContainer>
        {popularAnime &&
        popularAnime.Page.media.slice(0,5).map((element , id) => {
          return (
            <>
              <AnimeContainer key={id} onClick={() => navigate(`${element?.id}`)}>
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
  )
}

export default AlltimeAnime
