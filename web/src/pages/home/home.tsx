import styled from '@emotion/styled';
import React from 'react';
import TestDomain from '../../components/Test-Domain';

const StyledDescription = styled('div')(() => ({
    fontSize: 24,
}));

const Styledh1 = styled('h1')(() => ({
    fontSize: 24
}));

const HomeContainer = styled('div')(() => ({
    margin: '5% 7%'
}));

function Home() {
  return (
    <HomeContainer>
        <Styledh1>Website title here (see comment below)</Styledh1>
        <StyledDescription> this is the home page and description can be added here but this is the old way, 
            I think the new way will be to have some relevant information like some pictures and number of domains indexed</StyledDescription>
    <TestDomain></TestDomain>
    </HomeContainer>
  );
}

export default Home;