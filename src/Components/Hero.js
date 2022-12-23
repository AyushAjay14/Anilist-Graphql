import React from "react";
import styled from "styled-components";
import { icon1, icon2 } from "./HeroData";
const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  background-color: #0a1625;
  margin-top: 5em;
  border-radius: 18px;
  margin-bottom: 5em;
`;
const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.4em;
`;
const MainHeading = styled.p`
  color: white;
  font-size: 1.8rem;
  letter-spacing: 1px;
  font-weight: 700;
  font-family: "Overpass", sans-serif;
`;
const SecHeading = styled.p`
  color: #acd5f2;
  width: 60%;
  text-align: center;
  word-spacing: 1px;
  font-size: 1.4rem;
  font-family: "Overpass", sans-serif;
  margin-top: 0.9em;
`;
const InfoDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2,minmax(300px,400px));
  font-family: "Overpass", sans-serif;
  justify-content: center;
  margin-top: 6em;
  grid-gap: 70px 60px;
  padding: 0 2em;
`;
const Holder = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  img {
    height: 80px;
    width: 80px;
    grid-gap: 40px;
  }
`;
const InfoContainer = styled.div``;
function Hero() {
  return (
    <>
      <Container>
        <Heading>
          <MainHeading>The next-generation anime platform</MainHeading>
          <SecHeading>
            Track, share, and discover your favorite anime and manga with
            AniList.
          </SecHeading>
        </Heading>
        <InfoDiv>
            {icon1.map((e) => {
              return (
                <>
                  <Holder>
                    <img src={e.img} alt="" />
                    <InfoContainer>
                      <p style={{ color: "white", fontSize: "1.1em" , margin: "8px 0" }}>
                        {e.title}
                      </p>
                      <p style={{ color: "#acd5f2", fontSize: "0.85em" }}>
                        {e.desc}
                      </p>
                    </InfoContainer>
                  </Holder>
                </>
              );
            })}
        </InfoDiv>
      </Container>
    </>
  );
}

export default Hero;
