// src/components/MainContent.jsx
import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  background-color: #fff;
  padding: 40px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #666;
`;

const MainContent = () => {
  return (
    <ContentWrapper>
      <Title>About the Website</Title>
      <Paragraph>
        This website is a portfolio showcasing various projects and achievements.
        It aims to provide information and resources to users interested in web development.
      </Paragraph>
    </ContentWrapper>
  );
};

export default MainContent;
