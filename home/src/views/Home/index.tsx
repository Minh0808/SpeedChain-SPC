import { Link } from 'react-router-dom'
import styled from 'styled-components'
import images from '../../configs/images'

const Background = styled.div`
  width: 100%;
  max-height: 1024px;
  height: 1024px;
  background-position: center;
  background-size: cover;
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
`
const BTHome = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  .link {
    text-decoration: none;
  }
`
const BTStart = styled.div`
  width: 121px;
  height: 71px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Irish Grover;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 10px;
  border: 1px solid #000;
  background: var(--st, linear-gradient(90deg, #ffbd33 0%, #ff8000 100%));
`
const BTExit = styled.div`
  width: 121px;
  height: 71px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Irish Grover;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 10px;

  background-position: center;
  background-size: cover;
  .Exit {
    font-size: 40px;
    background: linear-gradient(90deg, #ffbd33 0%, #ff8000 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
const Home: React.FC = () => {
  return (
    <Background style={{ backgroundImage: 'url("./images/IconHome/Background.png")' }}>
      <Wraper>
        <Text>SPEED CHAIN GAME</Text>
        <BTHome>
          <Link className="link" to={'/games'}>
            <BTStart>Start</BTStart>
          </Link>
          <BTExit style={{ backgroundImage: 'url("./images/IconHome/buttonmain.png")' }}>
            <Text className="Exit">Exit</Text>
          </BTExit>
        </BTHome>
      </Wraper>
    </Background>
  )
}

export default Home
