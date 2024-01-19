import styled from 'styled-components'
import images from '../../../configs/images'
import { Link } from 'react-router-dom'

const Wraper = styled.div`
  width: 100%;
  height: 1024px;
  background-image: url(${images.Location});
  background-position: center;
  background-size: cover;
  padding-top: 100px;
  .Mobile {
    display: none;
  }
  @media only screen and (max-width: 575px) {
    height: 100%;
    background-image: none;
    padding-top: 0px;
    .Mobile {
      display: block;
      width: 100%;
      height: 345px;
    }
  }
`
const Header = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  .title {
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    background: var(--st, linear-gradient(90deg, #ffbd33 0%, #ff8000 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media only screen and (max-width: 575px) {
    justify-content: center;
    position: relative;
    top: -350px;
    gap: 0px;
    padding-top: 20px;
    .title {
      font-size: 20px;
    }
  }
`
const Text = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  color: #fff;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  @media only screen and (max-width: 575px) {
    font-size: 16px;
    height: 30px;
  }
`
const MyLocation = () => {
  return (
    <Link to={'/games'} style={{ textDecoration: 'none', color: 'white' }}>
      <Wraper>
        <img src={images.MobileIcon} className="Mobile" />
        <Header>
          <Text className="title">My Location</Text>
          <Text>Current position: 600 m</Text>
        </Header>
      </Wraper>
    </Link>
  )
}
export default MyLocation
