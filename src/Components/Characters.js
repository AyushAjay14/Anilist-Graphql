import React, {useEffect} from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import {useQuery} from '@apollo/client'
import {useSelector,useDispatch } from "react-redux"; 
import { GET_CHARACTERS } from "../graphql/anime/queries";
import { getCharacters } from "../redux/animeRedux";
const MainContainer = styled.div`
  background-color: rgb(237, 241, 245);
`;
const Container = styled.div`
  display: flex;
  margin-left: 250px;
  flex-direction: column;
  padding-top: 50px;
`;
const CharacterContainer = styled.div`
  display: grid;
    grid-column-gap: 30px;
    grid-row-gap: 15px;
    width: 70%;
  grid-template-columns: repeat(2,1fr);
`;
const Title = styled.p`
  font-size: 1.4em;
  color: rgb(92,114,138);
`;
const CharacterStaff = styled.div`
  /* background: rgb(var(--color-foreground)); */
    border-radius: 3px;
    display: inline-grid;
    grid-template-columns: 50% 50%;
    height: 80px;
    overflow: hidden;
    background-color: rgb(250,250,250);
    /* width: 400px; */
`;
const Character = styled.div`
  display: inline-grid;
  grid-template-columns: 60px auto;
  grid-template-areas: "image content";
  .img {
    background: url(${props=>props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    grid-area: image;
    &:hover{
      color: rgb( 61,180,242);
    }
  }
  .content{
    font-size: 0.9em;
    grid-area: content;
    overflow: hidden;
    padding: 10px;
    color: rgb(92,114,138);
  }
`;
const Name = styled.div`
      display: block;
    height: 48px;
    line-height: 1.3;
    
`;
const Role = styled.div`
  color: rgb(146,153,161);
    font-size: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
`;
const Staff = styled.div`
  display: inline-grid;
  grid-template-areas: "content image";
    grid-template-columns: auto 60px;

  .img {
    background: url(${props=>props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    grid-area: image;
  }
  .content{
    font-size: 0.9em;
    grid-area: content;
    overflow: hidden;
    padding: 10px;
  }
`;
function Characters() {
  const dispatch = useDispatch();
  const id = useLocation().pathname.split("/")[1];
  let { data: characters } = useQuery(GET_CHARACTERS, {
    variables: {
      id
    },
  });

  useEffect(() => {
    if (characters) {
      // console.log(characters);
      characters = characters.Page.media[0].characters.edges;
      dispatch(getCharacters(characters));
    }
  }, [characters, dispatch]);
  let chars = useSelector((state) => state.anime.characters);
  return (
    <>
      <MainContainer>
        {chars? <><Container>
          <Title>Characters</Title>
          <CharacterContainer>
           {chars?.slice(0 , 6).map((e) =>{
            // console.log(e.voiceActors[0]);
            return(
              <>
               <CharacterStaff>
              <Character image={e.node.image.large}>
                <a class="img" href="#"></a>
                <a class="content" href="#">
                  <Name>{e.node.name.userPreferred}</Name>
                  <Role>{e.role}</Role>
                </a>
              </Character>
              <Staff image={e.voiceActors[0]?.image.large}>
                <a class="img" href="#"></a>
                <a class="content" style={{textAlign: "right"}} href="#">
                  <Name>{e.voiceActors[0]?.name.userPreferred}</Name>
                  <Role>{e.voiceActors[0]?.languageV2}</Role>
                </a>
              </Staff>
            </CharacterStaff>
              </>
            )
           })}
          </CharacterContainer>
        </Container></> : ""}
      </MainContainer>
    </>
  );
}

export default Characters;
