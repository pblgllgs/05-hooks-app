import { RealExampleRef } from "../../../../components/04-useRef/RealExampleRef"
import {shallow} from 'enzyme'


describe('Pruebas en <RealExampleRef />', () => {
    const wrapper = shallow(<RealExampleRef />)

    test('Debe mostrarse correctamente <RealExampleRef />', () => {
        //se compara con un snapshot
        expect(wrapper).toMatchSnapshot()
        //se espera que en el snapshot no exista el elemento con nombre 'MultipleCustomHooks'
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)

    })

    test('debe de mostrar el componente <MultipleCustomHooks />', () => {
        //se simula un click en el boton
        wrapper.find('button').simulate('click');
        //se espera que en el snapshot exista el elemento con nombre 'MultipleCustomHooks'
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)
    })    
    
})
