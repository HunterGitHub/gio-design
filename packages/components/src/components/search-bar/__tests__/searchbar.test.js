import React from 'react';
import { mount } from 'enzyme';
import SearchBar from '..';

describe('SearchBar', () => {
  it('should support size', () => {
    const wrapper = mount(<SearchBar size="large" />);
    expect(wrapper.exists('.gio-input-container-large')).toBe(true);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
