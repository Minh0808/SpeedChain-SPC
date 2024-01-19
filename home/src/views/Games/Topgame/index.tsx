import styled from 'styled-components'
import images from '../../../configs/images'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${images.Background});
  background-position: center;
  background-size: cover;
  gap: 150px;
  padding-bottom: 162px;
  .Link {
    text-decoration: none;
    color: white;
  }
  @media only screen and (max-width: 575px) {
    gap: 0px;
    padding-bottom: 50px;
  }
`
const Header = styled.div`
  width: 94%;
  display: flex;
  align-items: flex-start;
  margin: 50px 0px 0px 100px;
  @media only screen and (max-width: 575px) {
    margin: 30px 0px 0px 10px;
  }
`
const Container = styled.div`
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
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
  .Back {
    width: 30px;
    height: 30px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 14px;
    .Back {
      width: 24px;
      height: 24px;
    }
  }
`
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 50px;
  .Items {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .Map {
    width: 105px;
    height: 78px;
  }
  .RocketIcon {
    width: 18px;
    height: 30px;
  }
  @media only screen and (max-width: 575px) {
    align-items: center;
    .Items {
      align-items: center;
    }
    .Map {
      width: 62px;
      height: 66px;
    }
    .RocketIcon {
      width: 16px;
      height: 26px;
    }
  }
`
const Text = styled.div`
  font-family: Irish Grover;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media only screen and (max-width: 575px) {
    font-size: 32px;
  }
`
const IMG = styled.img`
  width: 290px;
  height: 290px;
  @media only screen and (max-width: 575px) {
    width: 149px;
    height: 149px;
  }
`
const MapIcon = styled.div`
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  @media only screen and (max-width: 575px) {
    font-size: 26px;
  }
`
const RocketIcon = styled.div`
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  .TextRocket {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  .TextGradient {
    background: var(--st, linear-gradient(90deg, #ffbd33 0%, #ff8000 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media only screen and (max-width: 575px) {
    font-size: 14px;
  }
`
const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 30px;
  .Row {
    gap: 155px;
    justify-content: flex-start;
    padding-left: 30px;
    width: 96%;
  }
  .Row2 {
    gap: 160px;
    justify-content: flex-start;
    padding-left: 30px;
    width: 96%;
  }
  .Row3 {
    gap: 160px;
    justify-content: flex-start;
    padding-left: 30px;
    width: 96%;
  }
  .Row4 {
    gap: 330px;
    justify-content: flex-start;
    padding-left: 30px;
    width: 96%;
  }
  @media only screen and (max-width: 575px) {
    gap: 20px;
    .Row {
      width: 95%;
      justify-content: space-between;
      gap: 0px;
      padding: 0px 15px;
    }
    .Row2 {
      width: 95%;
      justify-content: space-between;
      gap: 0px;
      padding: 0px 15px;
    }
    .Row3 {
      width: 95%;
      justify-content: space-between;
      gap: 0px;
      padding: 0px 15px;
    }
    .Row4 {
      width: 95%;
      justify-content: space-between;
      gap: 0px;
      padding: 0px 15px;
    }
    .Top50 {
      font-size: 26px;
    }
    .Top50_PC {
      display: none;
    }
    .Row-PC {
      display: none;
    }
    .CaretdownIcon {
      width: 24px;
      height: 24px;
    }
  }
`
const Row = styled.div`
  width: 714px;
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 12px;
  background: #262626;
  box-shadow: 0px 0px 12px 0px rgba(255, 255, 255, 0.4);
  .Hover {
    width: 98.5%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    :hover {
      border-radius: 12px;
      background: var(--st, linear-gradient(90deg, #ffbd33 0%, #ff8000 100%));
      height: 55px;
      align-items: center;
      box-shadow: 0px 0px 12px 0px rgba(255, 255, 255, 0.4);
    }
  }
  .TextRow1 {
    font-family: 'Irish Grover';
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .TextRow2 {
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .TextRow3 {
    font-family: Poppins;
    .Wallet {
      width: 30px;
      height: 30px;
    }
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  .TextRow4 {
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  .Wallet {
    width: 30px;
    height: 30px;
  }
  .Champion {
    width: 46px;
    height: 36px;
  }
  .AutocratIcon {
    width: 40px;
    height: 40px;
  }
  .CrystalIcon {
    width: 40px;
    height: 40px;
  }
  .UnknowIcon {
    width: 40px;
    height: 40px;
  }
  @media only screen and (max-width: 575px) {
    .TextRow2 {
      font-size: 12px;
    }
    .TextRow3 {
      font-size: 12px;
    }
    .TextRow4 {
      font-size: 16px;
    }
    .Wallet {
      width: 24px;
      height: 24px;
    }
    .Champion {
      width: 24px;
      height: 20px;
    }
    .AutocratIcon {
      width: 24px;
      height: 24px;
    }
    .CrystalIcon {
      width: 24px;
      height: 24px;
    }
    .UnknowIcon {
      width: 24px;
      height: 24px;
    }
  }
`
const WalletIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  .TextColumn {
    display: flex;
    flex-direction: column;
  }
`
const ChampionIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`
const AutocratIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`
const CrystalIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`
const UnknowIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`
const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`
const HeaderMobile = styled.div`
  display: none;
  width: 100%;
  @media only screen and (max-width: 575px) {
    display: block;
    position: relative;
    left: -10px;
    .BoxMobile {
      width: 105%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`
const MenuMobile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`
const ColumnMenu = styled.div`
  width: 106px;
  height: 103px;
  padding: 0px 8px;
  border-radius: 6px;
  background: #262626;
  position: absolute;
  top: 110%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  .active {
    width: 86px;
    height: 35px;
    display: flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 4px;
    background: #373737;
  }
  .Text {
    font-size: 26px;
  }
`
const TopGames = () => {
  const [Menu_Mobile, setMenu_Mobile] = useState(false)
  const HanderMenu = () => {
    setMenu_Mobile(true)
    setActive(0)
    setActive2(0)
  }
  const HanderCloseMenu = () => {
    setMenu_Mobile(false)
  }
  const [Active, setActive] = useState(0)
  const [Active2, setActive2] = useState(0)
  const HandlerActive = (_Active: any) => {
    setActive(1)
    setActive2(0)
  }
  const HandlerActive2 = (_Active: any) => {
    setActive(0)
    setActive2(2)
  }
  return (
    <Wrapper>
      <Header>
        <Link to={'/'} className="Link">
          <Back>
            <IMG src={images.BackIcon} className="Back" />
            Back
          </Back>
        </Link>
      </Header>
      <Container>
        <ColumnLeft>
          <IMG src={images.AssetIcon} alt="" />
          <div className="Items">
            <Text>Your Balance</Text>
            <MapIcon>
              <IMG src={images.MapIcon} className="Map" />
              <div>
                <div>1000 m </div>/16 min
              </div>
            </MapIcon>
            <RocketIcon>
              <IMG src={images.RocketIcon} className="RocketIcon" />
              <div className="TextRocket">
                For
                <div className="TextGradient">9</div>
                days left to level up
              </div>
            </RocketIcon>
          </div>
        </ColumnLeft>
        <ColumnRight>
          <HeaderMobile>
            <div className="BoxMobile">
              <Text className="Top50">Top 50</Text>
              <MenuBox>
                <MenuMobile>
                  <Text className="Top50">Day</Text>
                  <img onClick={HanderMenu} src={images.CaretdownIcon} className="CaretdownIcon" />
                </MenuMobile>

                {Menu_Mobile && (
                  <ColumnMenu>
                    <Text className={Active === 1 ? 'active' : ''} onClick={HandlerActive}>
                      <div className="Text">Day</div>
                    </Text>
                    <Text className={Active2 === 2 ? 'active' : ''} onClick={HandlerActive2}>
                      <div className="Text">Week</div>
                    </Text>
                  </ColumnMenu>
                )}
              </MenuBox>
            </div>
          </HeaderMobile>
          <Text className="Top50_PC">Top 50</Text>
          <Row className="Row-PC">
            <div className="Hover">
              <Text className="TextRow1">Day</Text>
              <Text className="TextRow1">Week</Text>
            </div>
          </Row>
          <Row className="Row" onClick={HanderCloseMenu}>
            <WalletIcon>
              <IMG src={images.WalletIcon} className="Wallet" />
              <div className="TextColumn">
                <Text className="TextRow2">0x0154663...D8c14cB1</Text>
                <Text className="TextRow3">12.000 m</Text>
              </div>
            </WalletIcon>
            <ChampionIcon>
              <IMG src={images.ChampionIcon} className="Champion" />
              <Text className="TextRow4">Champion</Text>
            </ChampionIcon>
          </Row>
          <Row className="Row2" onClick={HanderCloseMenu}>
            <WalletIcon>
              <IMG src={images.WalletIcon} className="Wallet" />
              <div className="TextColumn">
                <Text className="TextRow2">0x0154663...D8c14cB1</Text>
                <Text className="TextRow3">11.000 m</Text>
              </div>
            </WalletIcon>
            <AutocratIcon>
              <img src={images.AutocratIcon} className="AutocratIcon" />
              <Text className="TextRow4">Master</Text>
            </AutocratIcon>
          </Row>
          <Row className="Row3" onClick={HanderCloseMenu}>
            <WalletIcon>
              <IMG src={images.WalletIcon} className="Wallet" />
              <div className="TextColumn">
                <Text className="TextRow2">0x0154663...D8c14cB1</Text>
                <Text className="TextRow3">10.000 m</Text>
              </div>
            </WalletIcon>
            <CrystalIcon>
              <img src={images.CrystalIcon} className="CrystalIcon" />
              <Text className="TextRow4">Crystal</Text>
            </CrystalIcon>
          </Row>
          <Row className="Row4">
            <WalletIcon>
              <IMG src={images.WalletIcon} className="Wallet" />
              <div className="TextColumn">
                <Text className="TextRow2">Me</Text>
                <Text className="TextRow3">3.000 m</Text>
              </div>
            </WalletIcon>
            <UnknowIcon>
              <img src={images.UnknowIcon} className="UnknowIcon" />
              <Text className="TextRow4">Unknown</Text>
            </UnknowIcon>
          </Row>
        </ColumnRight>
      </Container>
    </Wrapper>
  )
}
export default TopGames
