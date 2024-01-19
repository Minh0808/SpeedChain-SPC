import styled from 'styled-components'
import images from '../configs/images'
import { Link } from 'react-router-dom'

const Wraper = styled.div`
  width: 100%;
  height: 1024px;
  background-image: url(${images.Background});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  .img {
    width: 940px;
    height: 700px;
  }
  @media only screen and (max-width: 575px) {
    height: 100%;
    padding: 150px 0px;
    .img {
      width: 100%;
      height: 50%;
    }
  }
`
const LinkHomepage = styled.div`
  width: 249px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${images.LinkHomepage});
  background-position: center;
  background-size: cover;
`
const Text = styled.div`
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  background: var(--st, linear-gradient(90deg, #ffbd33 0%, #ff8000 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const PageNotFound = () => {
  return (
    <Wraper>
      <img src={images.NotFoundIcon} className="img" />
      <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
        <LinkHomepage>
          <Text>GO TO HOMEPAGE</Text>
        </LinkHomepage>
      </Link>
    </Wraper>
  )
}
export default PageNotFound
