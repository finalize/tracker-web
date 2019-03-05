import * as React from 'react';
import styledComponents from 'styled-components';

const HeaderComponent = styledComponents.div`
  width: 100%;
  height: 64px;
  background-color: #222;
`;

const InnerHeaderComponent = styledComponents.div`
  width: 880px;
  height: 64px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styledComponents.div`
  color: #fafafa;
  font-size: 36px;
  font-family: 'Great Vibes', cursive;
  padding-top: 14px
`;

const Header = () => {
  return (
    <HeaderComponent>
      <InnerHeaderComponent>
        <Title>Tracker</Title>
      </InnerHeaderComponent>
    </HeaderComponent>
  );
};

export default Header;
