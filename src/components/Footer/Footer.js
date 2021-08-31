import React from 'react';

//icons
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import MediumSVG from '../SVGs/MediumSVG';

//styles
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialIconsContainer, FooterSvg, SocialContainer, FooterLink } from './FooterStyles';

// footer icons
import StyledComponentSVG from '../FooterSVGs/StyledComponentSVG/StyledComponentSVG';
import  NextJsSVG from '../FooterSVGs/NextJsSVG/NextJsSVG';
import ReactIconsSVG from '../FooterSVGs/ReactIconsSVG/ReactIconsSVG';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:08162677448">+234-816-267-744-8</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:ekechinedu488@gmail.com">ekechinedu488@gmail.com</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle style={{ paddingLeft: '25px'}}> Articles</LinkTitle>
        <a href="https://ekechinedu488.medium.com/" target="_blank"><MediumSVG /></a>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Made with 
              <FooterLink href="https://nextjs.org/" target="_blank"> Next.js</FooterLink>,
              <FooterLink href="https://styled-components.com/" target="_blank"> Styled Components</FooterLink>, and
              <FooterLink href="https://react-icons.github.io/react-icons/" target="_blank"> React-icons</FooterLink>.
            <FooterSvg>
              <NextJsSVG />
              <StyledComponentSVG />
              <ReactIconsSVG />
            </FooterSvg>
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
      <Slogan style={{ textAlign: 'center' }}>&copy; 2021</Slogan>
    </FooterWrapper>
  );
};

export default Footer;
