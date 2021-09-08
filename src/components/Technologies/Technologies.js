import React from 'react';

//icons
import { DiFirebase, DiReact } from 'react-icons/di';
import { AiOutlineMonitor, AiOutlineCloudServer } from 'react-icons/ai';
import { FaNode, FaGitAlt } from 'react-icons/fa';
import { BiCodeCurly, BiBookContent } from 'react-icons/bi';
import { SiSwagger, SiPostman, SiExpo, SiTrello } from 'react-icons/si';

// components
import { Section, SectionDivider,
  //SectionText,
  SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    {/* <SectionText>
       I have hgghghghgg
    </SectionText> */}
    <List>
      <ListItem>
        <DiReact size="6rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with <br /> React.js & React Native</ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <BiCodeCurly size="6rem" />
        <ListContainer>
          <ListTitle>Api</ListTitle>
          <ListParagraph>Experience with <br /> REST, GraphQL</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <FaNode size="6rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with <br /> Node.js</ListParagraph>
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
        <AiOutlineMonitor size="6rem" />
        <ListContainer>
          <ListTitle>Bug Tracking</ListTitle>
          <ListParagraph>Experience with <br /> Track.js</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <AiOutlineCloudServer size="6rem" />
        <ListContainer>
          <ListTitle>Cloud Service</ListTitle>
          <ListParagraph>Experience with Heroku <br /> AWS and Digital Ocean</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <BiBookContent size="6rem" />
        <ListContainer>
          <ListTitle>Headless CMS</ListTitle>
          <ListParagraph>Experience with <br /> Strapi and Contentful</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <FaGitAlt size="6rem" />
        <ListContainer>
          <ListTitle>Versioning</ListTitle>
          <ListParagraph>Experience with <br /> Git</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiSwagger size="5rem" />
        <ListContainer>
          <ListTitle>API Documentation</ListTitle>
          <ListParagraph>Experience with <br /> Swagger</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiPostman size="5rem" />
        <ListContainer>
          <ListTitle>API <br /> Testing</ListTitle>
          <ListParagraph>Experience with <br /> Postman</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiExpo size="5rem" />
        <ListContainer>
          <ListTitle>Mobile <br /> App Dev</ListTitle>
          <ListParagraph>Experience with <br /> Expo</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiTrello size="5rem" />
        <ListContainer>
          <ListTitle>Task <br /> Management</ListTitle>
          <ListParagraph>Experience with <br /> Trello</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
