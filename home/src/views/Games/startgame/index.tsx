import { Link } from 'react-router-dom'
import styled from 'styled-components'
import images from '../../../configs/images'
import { useState } from 'react'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${images.Background});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  width: 90%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px;
  gap: 21px;
  .Title {
    font-family: Irish Grover;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .Start {
    width: 319px;
    height: 319px;
  }
`
const Header = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .Link {
    text-decoration: none;
    color: white;
  }
`
const Back = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Poppins;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
`
const Text = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Poppins;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`
const IMG = styled.img`
  width: 30px;
  height: 30px;
`
const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 644px;
  height: 85px;
  padding: 0px 30px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #262626;
  filter: drop-shadow(0px 0px 7px rgba(255, 255, 255, 0.4));
`
const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`
const ColumnText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  .Community {
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  .textUs {
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
`
const Champion = styled.div`
  display: flex;
  align-items: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  gap: 15px;
  .Champion {
    width: 46px;
    height: 36px;
  }
`
const Map = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 24px;
  gap: 120px;
  .Map {
    width: 106px;
    height: 100px;
  }
`
const Unknown = styled.div`
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  .Unknown {
    width: 46px;
    height: 46px;
  }
`
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`
const Speedometer = styled.div`
  width: 204px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 12px;
  background: #262626;
  box-shadow: 0px 0px 12px 0px rgba(255, 255, 255, 0.4);
`
const Location = styled.div`
  width: 204px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 12px;
  background: #262626;
  box-shadow: 0px 0px 12px 0px rgba(255, 255, 255, 0.4);
`

const StartGames = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Link to={'/'} className="Link">
            <Back>
              <IMG src={images.BackIcon} alt="btn" />
              Back
            </Back>
          </Link>
          <Text>Day 1</Text>
        </Header>
        <Text className="Title">SPEED CHAIN</Text>
        <Box>
          <User>
            <IMG src={images.UserIcon} alt="User" />
            <ColumnText>
              <Text className="Community">Community</Text>
              <Text className="textUs">12.000 m</Text>
            </ColumnText>
          </User>
          <Champion>
            <IMG src={images.ChampionIcon} className="Champion" />
            Champion
          </Champion>
        </Box>
        <Map>
          <IMG src={images.MapIcon} className="Map" />
          20 m / 3 min
        </Map>
        <Unknown>
          <IMG src={images.UnknowIcon} className="Unknown" />
          Unknown
        </Unknown>
        <img src={images.StartIcon} className="Start" />
        <Bottom>
          <Speedometer>
            <IMG src={images.SpeedometerIcon} className="Speedometer" />
            980/1000m
          </Speedometer>
          <Location>
            <IMG src={images.LocationIcon} className="Location" />
            My Location
          </Location>
        </Bottom>
      </Container>
    </Wrapper>
  )
}

export default StartGames
