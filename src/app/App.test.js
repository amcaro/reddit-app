import React from 'react';
import App from './App';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});


describe("App", () => {
  it("should render App", () => {
    const component = shallow(<App />);
    expect(component.getElements()).toMatchSnapshot();
  });
});