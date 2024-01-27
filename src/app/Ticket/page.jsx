'use client'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

export const TicketImgBg = styled.div`
  width: 660px;
  height: 390px;
  background-color: #206ea6;
  position: absolute;
  background: linear-gradient(
    106.88deg,
    rgba(0, 62, 183, 0.8) 1.32%,
    rgba(0, 0, 0, 0) 18.58%,
    rgba(0, 154, 164, 0.2) -4.72%,
    rgba(2, 9, 165, 0) 109.51%,
    rgba(0, 224, 255, 0.96) -4.08%,
    rgba(0, 0, 0, 0) 48.42%
  );
  border: 4px solid hotpink;
  margin: 50px;
  border-radius: 20px;
`

const TicketImage = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid white;
  border-radius: 20px;
`
const TicketText = styled.div`
  position: absolute;
  top: 0vw;
  color: white;
  border: 1px solid black;
  width: 100%;
  height: 100%;
`

const Names = styled.div`
  position: absolute;
  bottom: 0vw;
  left: 1.5vw;
  color: white;
  border: 1px solid red;
  position: absolute;
  width: 40%;
  max-height: 40%;
  padding: 1vw 3vw;
`
const UserName = styled.h1`
  background: -webkit-linear-gradient(97.42deg, #e0e0e0 6.54%, rgba(174, 171, 171, 0.78) 124.9%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8vw;
`
const TeamName = styled.h2`
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
  line-height: 1.2vw;
  letter-spacing: 0em;
  text-align: left;
`
const TicketNum = styled.span`
  border: 1px solid red;
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
`
const DarkUserName = styled(UserName)`
  background: -webkit-linear-gradient(97.42deg, #010101 6.54%, rgba(79, 82, 82, 0.78) 124.9%);
  background-clip: text;
`
const DarkTeamName = styled(TeamName)`
  background: -webkit-linear-gradient(
    91.7deg,
    rgba(0, 0, 0, 0.03) 4.11%,
    rgba(0, 0, 0, 0.9) 107.31%
  );
  background-clip: text;
`
const DarkTicketNum = styled(TicketNum)`
  background: -webkit-linear-gradient(
    91.7deg,
    rgba(0, 0, 0, 0.03) 4.11%,
    rgba(0, 0, 0, 0.9) 117.31%
  );
  background-clip: text;
`

const demo_name = 'Xori octacat'
const demo_team = 'DSC NITR'
const demo_num = 510000
const demo_img_url =
  'https://res.cloudinary.com/djl2ulktr/image/upload/v1706380517/ejsd4w2xsqhowanwxjvz.png'

const demo_lightBg = false

export const InnerTicket = ({
  user_name = demo_name,
  team_name = demo_team,
  ticket_num = demo_num,
  ticket_img_url = demo_img_url,
  lightBg = demo_lightBg
}) => {
  return (
    <>
      <TicketImage src={ticket_img_url} width={100} height={100} alt="green ticket" />
      {!lightBg ? (
        <TicketText>
          <Names>
            <UserName>{user_name}</UserName>
            <TeamName>{team_name}</TeamName>
          </Names>
          <TicketNum>{ticket_num}</TicketNum>
        </TicketText>
      ) : (
        <TicketText>
          <Names>
            <DarkUserName>{user_name}</DarkUserName>
            <DarkTeamName>{team_name}</DarkTeamName>
          </Names>
          <DarkTicketNum>{ticket_num}</DarkTicketNum>
        </TicketText>
      )}
    </>
  )
}

const Ticket = ({
  user_name = demo_name,
  team_name = demo_team,
  ticket_num = demo_num,
  ticket_img_url = demo_img_url,
  lightBg = demo_lightBg
}) => {
  return (
    <>
      <TicketImgBg>
        <TicketImage src={ticket_img_url} width={100} height={100} alt="green ticket" />
        {!lightBg ? (
          <TicketText>
            <Names>
              <UserName>{user_name}</UserName>
              <TeamName>{team_name}</TeamName>
            </Names>
            <TicketNum>{ticket_num}</TicketNum>
          </TicketText>
        ) : (
          <TicketText>
            <Names>
              <DarkUserName>{user_name}</DarkUserName>
              <DarkTeamName>{team_name}</DarkTeamName>
            </Names>
            <DarkTicketNum>{ticket_num}</DarkTicketNum>
          </TicketText>
        )}
      </TicketImgBg>
    </>
  )
}

export default Ticket