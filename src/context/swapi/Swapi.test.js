import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import SwapiContext from './swapiContext';
import SwapiState from './SwapiState';
import { configure, mount } from 'enzyme';

configure({adapter: new Adapter()});

describe("Swapi props", () => {

  it("inicial props", () => {

    
    const TestComponent = () => {
      const {name, loading} = React.useContext(SwapiContext);
      return <>
        <div data-testid="value">{name}</div>
        <div data-testid="value2">{loading.toString()}</div>
        </>
    }

    const wrapper = mount(<SwapiState><TestComponent /></SwapiState>)

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('')
    expect(wrapper.find('[data-testid="value2"]').text()).toEqual('false')
  })



})