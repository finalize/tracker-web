import * as React from 'react';
import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';

const header = () => (
  <div>
    <HEADER><Link to=""/></HEADER>
  </div>
);

const HEADER = styledComponents.div`
  height: 64px;
  border-bottom: 1px solid #eee;
`;

export default header;
