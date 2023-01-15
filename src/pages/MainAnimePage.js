import React , {useEffect} from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {Loader , Segment , Dimmer , Image} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import {useQuery} from '@apollo/client'
import { useDispatch , useSelector } from "react-redux";
import { GET_ANIME_DESC } from "../graphql/anime/queries";
import { getAnimeDesc } from "../redux/animeRedux";
import Characters from "../Components/Characters";
const CoverImageContainer = styled.div`
  height: 350px;
  background-image: url(${props=> props.image});
  background-position: center;
  /* background-repeat: no-repeat; */
  background-size: cover;
  align-self: normal;
`;
const MainContainer = styled.div`
    background-color: rgb(250,250,250);
    display: flex;
    flex-direction: column;
    align-items: center;
`
const DescriptionContainer = styled.div`
    max-width: 1140px;
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 215px auto;
  color: rgb(92, 114, 138);
  position: relative;
`;
const AnimeImage = styled.div`
  img {
    height: 323px;
    width: 215px;
    border-radius: 2px;
  }
  position: static;
  margin-top: ${props=>props.image ? "-125px" : "0px"};
`;
const Favourite = styled.div`
  display: grid;
  grid-template-columns: auto 32px;
  grid-gap: 10px;
  margin-top: 5px;
`;
const AddtoList = styled.div`
  background-color: rgb(61, 180, 242);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 3px;
`;
const Heart = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 32px;
  border-radius: 4px;
  svg {
    fill: #ffffff;
    /* transform: msFilter; */
  }
`;
const Title = styled.p`
    font-size: 1.3em;
`
const Description = styled.div`
    max-width: 760px;
    .desc{
      margin-top: 10px;
    }
p{
    margin-top: 14px;
}
ul {
    list-style: none;
}
li{
    margin: 2px 0;
}
margin-top: 14px;
  font-size: 0.9em;
`;
function MainAnimePage() {
  const dispatch = useDispatch();
  const id = useLocation().pathname.split("/")[1];
  const {data: desc , loading} = useQuery(GET_ANIME_DESC , {
    variables: {
      id
    }
  });
  useEffect(() => {
    if (desc) {
      dispatch(getAnimeDesc(desc));
    }
  }, [desc, dispatch]);
  let anime = useSelector((state) => state.anime.animeDesc);
  let animedesc = anime;
  animedesc = animedesc?.Page?.media[0].description;
  let animedesc2 = animedesc?.replaceAll("<br>" , "<br/>");
  var stringToHTML = function (str) {
    var dom = document.createElement('div');
    dom.innerHTML = str;
    return dom;
  };
  animedesc2 = stringToHTML(animedesc2);
 useEffect(() => {
    const element = document.getElementsByClassName('desc')[0];
    // console.log("childs" , element.childElementCount);
    // console.log("animedesc" , animedesc2);
  if(animedesc!= null && element != null && !element.childElementCount)element.appendChild(animedesc2);
  }, [anime]);
  
  return (
    <>
    {loading ? (
        <Segment style={{margin : "auto"}}>
        <Dimmer active>
        <Loader>Loading</Loader>
        </Dimmer>
    
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>
      ) : (
        
      <>
      <MainContainer>
      {anime?.Page?.media[0].bannerImage && <CoverImageContainer image={anime?.Page?.media[0].bannerImage} />}
      <DescriptionContainer>
        <AnimeImage image = {anime?.Page?.media[0].bannerImage}>
          <img
            src={anime?.Page?.media[0].coverImage.extraLarge}
            alt=""
          />
          <Favourite>
            <AddtoList>
              <p>Add to List</p>
            </AddtoList>
            <Heart>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
              </svg>
            </Heart>
          </Favourite>
        </AnimeImage>
        <Description>
            <Title>{anime?.Page?.media[0].title.userPreferred}</Title>
            <div className="desc"></div>
        </Description>
      </DescriptionContainer>
      </MainContainer>
      <Characters/>
      </>
      )}
    </>
  );
}

export default MainAnimePage;