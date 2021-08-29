import Link from 'next/link';
import React from 'react';

//icons
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { RiWhatsappFill } from 'react-icons/ri';

// styles
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
      <a style={{ display: "flex", alignItems:"center", color: 'white', marginBottom: "20px" }}>
        <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
      </a>
      </Link>
    </Div1>
    <Div2 >
      <li>
        <Link href="#projects">
        <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
        <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
        <NavLink>About</NavLink>
        </Link>
      </li>
     
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/chayyccee" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/chinedu-eke" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://wa.me/2348027950336" target="_blank">
        <RiWhatsappFill size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/chayyccee" target="_blank">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
