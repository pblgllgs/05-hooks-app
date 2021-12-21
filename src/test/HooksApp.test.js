import React from "react";
import { shallow } from "enzyme";
import HooksApp from '../HooksApp'

describe('Pruebas sobre <HooksApp />', () => {

    //se captura el componente montado
    let wrapper = shallow(<HooksApp />);

    test('Debe de mostrar correctamente', () => {
        //se compara con el snapshot
        expect(wrapper).toMatchSnapshot();
    })
})
