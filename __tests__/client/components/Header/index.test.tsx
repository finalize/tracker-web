import * as Enzyme from 'enzyme';
import * as React from 'react';

import Header from '../../../../src/client/components/Header';

test('renders without errors', () => {
  const wrapper = Enzyme.shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
