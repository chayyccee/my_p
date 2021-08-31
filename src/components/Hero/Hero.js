import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';

//styles
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>Eke, <br />
      Chinedu <img src="https://img.shields.io/badge/-Javascript-333333?style=flat&logo=Javascript" alt="javascript_badge" /> 
      </SectionTitle>
      <SectionText>
        Welcome to my page. I am a <kbd>Full Stack</kbd> Software Developer
      </SectionText>
      <Button onClick={() => window.location = 'https://pdfhost.io/v/seZ1V.wqc_ResumeChineduEke.pdf'}>My Resume</Button>
      
    </LeftSection>
  </Section>
);

export default Hero;