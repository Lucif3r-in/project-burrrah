import styled from 'styled-components'

export const TicketImage = styled.img`
  width: 100%;
  height: 100%;
  border: 0px solid white;
  border-radius: 10px;
`
export const TicketText = styled.div`
  position: absolute;
  top: 0vw;
  color: white;
  border: 0px solid black;
  width: 100%;
  height: 100%;
`

export const Names = styled.div`
  position: absolute;
  bottom: 6%;
  left: 8%;
  color: white;
  position: absolute;
  width: 40%;
  max-height: 50%;
  padding: 1vw;
`
export const UserName = styled.h1`
  font-size: 50px;
  background: -webkit-linear-gradient(97.42deg, #e0e0e0 6.54%, rgba(174, 171, 171, 0.78) 124.9%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8vw;
  line-height: 1.8vw;
  @media (max-width: 980px) {
    font-size: 3vw;
  }
`
export const TeamName = styled.h2`
  background: -webkit-linear-gradient(
    91.7deg,
    rgba(253, 253, 253, 0.03) 4.11%,
    rgba(253, 253, 253, 0.9) 107.31%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: Montserrat;
  font-size: 1.5vw;
  font-weight: 500;
  line-height: 1.4vw;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 980px) {
    font-size: 2.8vw;
  }
`
export const TicketNum = styled.span`
  transform: rotate(-90deg);
  position: absolute;
  right: -1vw;
  bottom: 50%;
  color: white;
  padding: 2vw 0vw;

  background: -webkit-linear-gradient(
    91.7deg,
    rgba(253, 253, 253, 0.03) 4.11%,
    rgba(253, 253, 253, 0.9) 117.31%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: Montserrat;
  font-size: 2vw;
  font-weight: 500;
  @media (max-width: 980px) {
    font-size: 3.5vw;
  }
`
export const DarkUserName = styled(UserName)`
  background: -webkit-linear-gradient(97.42deg, #010101 6.54%, rgba(79, 82, 82, 0.78) 124.9%);
  background-clip: text;
`
export const DarkTeamName = styled(TeamName)`
  background: -webkit-linear-gradient(
    91.7deg,
    rgba(0, 0, 0, 0.03) 4.11%,
    rgba(0, 0, 0, 0.9) 107.31%
  );
  background-clip: text;
`
export const DarkTicketNum = styled(TicketNum)`
  background: -webkit-linear-gradient(
    91.7deg,
    rgba(0, 0, 0, 0.03) 4.11%,
    rgba(0, 0, 0, 0.9) 117.31%
  );
  background-clip: text;
`

// modal styles

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(230, 230, 230, 0.4) 30%,
    rgba(240, 240, 255, 0.6) 43%,
    rgba(230, 230, 230, 0.4) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`

export const ModalContent = styled.div`
  width: 50%;
  height: auto;
  border: 0px solid red;
  position: relative;
  @media (max-width: 680px) {
    width: 80%;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 6vw;
  right: 14vw;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid rgba(200, 200, 200, 0.2);
  height: 40px;
  width: 40px;
  font-size: 20px;
  background: linear-gradient(
    97.1deg,
    rgba(247, 225, 255, 0.88) 11.37%,
    rgba(218, 115, 255, 0.58) 102.95%
  );

  &:hover {
    background: linear-gradient(
      97.1deg,
      rgba(247, 225, 255, 2) 11.37%,
      rgba(218, 115, 255, 1) 102.95%
    );
  }

  @media (max-width: 550px) {
    right: 14vw;
    top: 30vw;
    width: 30px;
    height: 30px;
  }
`
export const CloseImg = styled.img`
  width: 100%;
  height: 100%;
`
// For Modal View

export const ModalNames = styled.div`
  position: absolute;
  bottom: 12%;
  left: 9%;
  color: white;
  position: absolute;
  width: 40%;
  max-height: 70%;
  padding: 1.5vw;
  @media (max-width: 680px) {
    left: 11%;
    bottom: 15%;
  }
`
export const ModalUserNm = styled.h1`
  background: -webkit-linear-gradient(97.42deg, #e0e0e0 6.54%, rgba(174, 171, 171, 0.78) 124.9%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3.2vw;
  line-height: 3.2vw;
  @media (max-width: 980px) {
    font-size: 3vw;
  }
  @media (max-width: 680px) {
    font-size: 4.5vw;
  }
`

export const ModalTeamName = styled.h2`
  background: -webkit-linear-gradient(
    91.7deg,
    rgba(253, 253, 253, 0.3) 0.11%,
    rgba(253, 253, 253, 0.9) 140.31%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: Montserrat;
  font-size: 2.3vw;
  font-weight: 500;
  line-height: 1.6vw;

  @media (max-width: 980px) {
    font-size: 2.8vw;
  }
  @media (max-width: 680px) {
    font-size: 3.5vw;
  }
`

export const DarkModalUserNm = styled(ModalUserNm)`
  background: -webkit-linear-gradient(97.42deg, #010101 6.54%, rgba(79, 82, 82, 0.78) 124.9%);
  background-clip: text;
`
export const DarkModalTeamName = styled(ModalTeamName)`
  background: -webkit-linear-gradient(
    91.7deg,
    rgba(0, 0, 0, 0.03) 0.11%,
    rgba(0, 0, 0, 0.9) 107.31%
  );
  background-clip: text;
`
