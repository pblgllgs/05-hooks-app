import React from "react";
import { shallow } from "enzyme";
import HooksApp from '../HooksApp'

describe('Pruebas sobre <HooksApp />', () => {

    let wrapper = shallow(<HooksApp />);

    test('Debe de mostrar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
})
