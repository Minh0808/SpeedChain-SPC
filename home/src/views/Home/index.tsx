import { Link } from 'react-router-dom'
import styled from 'styled-components'
import images from '../../configs/images'

const Background = styled.div`
  width: 100%;
  max-height: 1024px;
  height: 1024px;
  background-image: url(${images.Background});
  background-position: center;
  background-size: cover;
  @media only screen and (max-width: 575px) {
    background-image: url(${images.Background_Mobile});
    background-position: center;
    background-size: cover;
    max-height: 932px;
    height: 100%;
    padding: 275px 0px;
  }
`
const Wraper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`
const Text = styled.div`
  color: #fff;
  font-family: Irish Grover;
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media only screen and (max-width: 575px) {
    font-size: 32px;
  }
`
const BTHome = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  @media only screen and (max-width: 575px) {
    gap: 30px;
  }
`
const BTStart = styled.div`
  width: 121px;
  height: 71px;
  background-image: url(${images.BTStart});
  background-position: center;
  background-size: cover;
  @media only screen and (max-width: 575px) {
    width: 85px;
    height: 49px;
    background-image: url(${images.BTStart_Mobile});
  }
`
const BTExit = styled.div`
  width: 121px;
  height: 71px;
  background-image: url(${images.BTExit});
  background-position: center;
  background-size: cover;
  @media only screen and (max-width: 575px) {
    width: 85px;
    height: 49px;
    background-image: url(${images.BTExit_Mobile});
  }
`
const Home: React.FC = () => {
  return (
    <Background>
      <Wraper>
        <Text>SPEED CHAIN GAME</Text>
        <BTHome>
          <Link className="link" to={'/games'}>
            <BTStart />
          </Link>
          <Link to={'/erro'}>
            <BTExit />
          </Link>
        </BTHome>
      </Wraper>
    </Background>
  )
}

export default Home
