import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { FaNode } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      i have jwjensjghg ksjkshjdjjhjjs jndjjjdh sknkhjsj jhdjhajdhjahj kdhkhdkshkjs kjdskhdkjdjhshjs kdahdkahdkah abdkahdakhda dmadkahdka akkhadkahka amdakjdja
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="6rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with <br /> React.js & React Native</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="6rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>Experience with <br /> NoSQL & SQL</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaNode size="6rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with <br /> Node.js</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
