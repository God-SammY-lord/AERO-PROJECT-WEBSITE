import React from "react"
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import teamCardStyle from "../../styles/about/teamcard.module.scss"

import Container from "react-bootstrap/Container";

const TeamCard = ({ name, title, link_linkedin, link_mail, link_github }) => (
  <div className={teamCardStyle.teamCardOuter}>
    <Container fluid="true" className={teamCardStyle.teamCardInner} style={{ height:`inherit`, padding:`0`, margin:`0`, overflow:`hidden` }}>
      <p className={teamCardStyle.name}>{ name }</p>
      <p className={teamCardStyle.post}><b>{ title }</b></p>
      <p className={teamCardStyle.tap}>(TAP TO CONNECT)</p>
    </Container>
    <div className={teamCardStyle.socialIconContainer}>
      <div className={teamCardStyle.socialIconWrapper}>
        <div className={teamCardStyle.icon}>
          <a href={link_linkedin}><FaLinkedin /></a>
        </div>
        <div className={teamCardStyle.icon}>
          <a href={link_github}><FaGithub color="#000"/></a>
        </div>
        <div className={teamCardStyle.icon}>
          <a href={link_mail}><FaEnvelope color="#00bce4"/></a>
        </div>
      </div>
    </div>
  </div>
)

export default TeamCard
