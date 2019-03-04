import * as React from 'react';
import styledComponents from 'styled-components';

const HeaderComponent = styledComponents.div`
  width: 100%;
  height: 64px;
  background-color: #333;
`;

const Header = () => {
  return (
    <HeaderComponent />
  );
};

export default Header;
