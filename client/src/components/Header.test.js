import React from 'react';
import { mount } from 'enzyme';
import { mountComponent } from '../utils/testUtils.js';

import Header from './Header.jsx';

test('Header renders correctly', () => {
  const wrapper = mountComponent(Header);
  expect(wrapper).toMatchSnapshot();
});
