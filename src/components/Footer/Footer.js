import React from 'react';

//icons
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';

//styles
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, FooterSvg, SocialContainer, SocialIconsContainer } from './FooterStyles';

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
        <LinkItem href="tel:111-111-111-1">111-111-111-1</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:ekechinedu488@gmail.com">ekechinedu488@gmail.com</LinkItem>
      </LinkColumn>
      
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Made with Next.js, Styled Components, and React-icons. <FooterSvg><NextJsSVG /> <StyledComponentSVG /> <ReactIconsSVG /></FooterSvg> </Slogan>
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
