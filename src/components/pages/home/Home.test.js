import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Home from './Home';

configure({adapter: new Adapter()});

describe('Testes para Home', () => {

  it('Componente', () => {
    const wrapper = shallow(<Home />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});