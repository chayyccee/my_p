import React from 'react';

import { ContItem, ImgCont } from './StatisticsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Statistics = () => {
    return (
        <Section nopadding>
            <SectionDivider />
            <SectionTitle main>Statistics</SectionTitle>
            <ImgCont>
           <ContItem src="https://github-readme-stats.vercel.app/api?username=chayyccee&theme=buefy&show_icons=true" alt="github stats" />
           <ContItem src="https://github-readme-stats.vercel.app/api/top-langs/?username=chayyccee&theme=buefy&layout=compact" alt="github language stats" />
            </ImgCont>
            <div>
            <figure style={{ paddingTop: "3rem"}}><embed src="https://wakatime.com/share/@cdc9effd-3ffd-4619-9c1c-1fca3d4ae02f/831c352b-755b-453d-a6ed-304583e1fd87.svg" alt="wakatime stats"></embed></figure>
            </div>
        </Section>
    );
}

export default Statistics;