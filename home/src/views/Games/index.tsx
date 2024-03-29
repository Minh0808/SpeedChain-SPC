import styled from 'styled-components'
import images from '../../configs/images'
import { Link } from 'react-router-dom'
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
  @media only screen and (max-width: 575px) {
    background-image: url(${images.Background_Mobile});
  }
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
    @media only screen and (max-width: 575px) {
      font-size: 32px;
    }
  }
  .Start {
    width: 319px;
    height: 319px;
  }
  .link {
    text-decoration: none;
    color: white;
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
  @media only screen and (max-width: 575px) {
    font-size: 14px;
  }
`
const Text = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Poppins;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  @media only screen and (max-width: 575px) {
    font-size: 14px;
  }
`
const IMG = styled.img`
  width: 30px;
  height: 30px;
  @media only screen and (max-width: 575px) {
    width: 24px;
    height: 24px;
  }
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
  @media only screen and (max-width: 575px) {
    width: 95%;
    height: 62px;
    padding: 0px 15px;
  }
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
  @media only screen and (max-width: 575px) {
    gap: 5px;
  }
  .Community {
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    @media only screen and (max-width: 575px) {
      font-size: 16px;
    }
  }
  .textUs {
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    @media only screen and (max-width: 575px) {
      font-size: 14px;
    }
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
  @media only screen and (max-width: 575px) {
    font-size: 16px;
  }
  .Champion {
    width: 46px;
    height: 36px;
    @media only screen and (max-width: 575px) {
      width: 24px;
      height: 20px;
    }
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
  @media only screen and (max-width: 575px) {
    font-size: 26px;
    gap: 30px;
  }
  .Map {
    width: 106px;
    height: 100px;
    @media only screen and (max-width: 575px) {
      width: 62px;
      height: 58px;
    }
  }
  .textColumn {
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 575px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
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
  @media only screen and (max-width: 575px) {
    font-size: 16px;
  }
  .Unknown {
    width: 46px;
    height: 46px;
    @media only screen and (max-width: 575px) {
      width: 24px;
      height: 24px;
    }
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
  @media only screen and (max-width: 575px) {
    width: 100%;
    gap: 30px;
    font-size: 16px;
  }
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
  @media only screen and (max-width: 575px) {
    width: 156px;
    height: 69px;
  }
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
  @media only screen and (max-width: 575px) {
    width: 156px;
    height: 69px;
  }
`
const StyledImg = styled.div`
  height: 320px;
  .End {
    width: 319px;
    height: 319px;
  }
  .EndDisaple {
    width: 319px;
    height: 319px;
  }
`
const Games = () => {
  const [playGames, setPlayGames] = useState(0)

  const handledPlayGame = (_ix: number) => {
    setPlayGames(_ix)
    if (_ix === 1) {
      setTimeout(() => {
        window.location.href = '/topgames'
      }, 2000)
    }
  }
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
          <div className="textColumn">
            <div>0 m</div>
            <div>/ 0 min</div>
          </div>
        </Map>
        <Unknown>
          <IMG src={images.UnknowIcon} className="Unknown" />
          Unknown
        </Unknown>
        <StyledImg>
          {playGames === 0 ? (
            <IMG
              onClick={() => handledPlayGame(1)}
              style={{ cursor: 'pointer' }}
              src={images.StartIcon}
              className="Start"
            />
          ) : (
            <>
              {playGames === 1 ? (
                <IMG
                  onClick={() => handledPlayGame(2)}
                  style={{ cursor: 'pointer' }}
                  src={images.EndIcon}
                  className="End"
                />
              ) : (
                <IMG style={{ cursor: 'pointer' }} src={images.EndDisapleIcon} className="EndDisaple" />
              )}
            </>
          )}
        </StyledImg>
        <Bottom>
          <Speedometer>
            <IMG src={images.SpeedometerIcon} className="Speedometer" />
            1000/1000m
          </Speedometer>
          <Link to={'/my-location'} className="link">
            <Location>
              <IMG src={images.LocationIcon} className="Location" />
              My Location
            </Location>
          </Link>
        </Bottom>
      </Container>
    </Wrapper>
  )
}

export default Games
