import React from 'react';
import { shallow } from 'enzyme';
import RestyApp from './RestyApp';

describe('RestyApp component', () => {
  it('renders RestyApp', () => {
    const wrapper = shallow(<RestyApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
