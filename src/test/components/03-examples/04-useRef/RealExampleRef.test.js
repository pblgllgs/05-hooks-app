import { RealExampleRef } from "../../../../components/04-useRef/RealExampleRef"
import {shallow} from 'enzyme'


describe('Pruebas en <RealExampleRef />', () => {
    const wrapper = shallow(<RealExampleRef />)

    test('Debe mostrarse correctamente <RealExampleRef />', () => {
        console.log(wrapper.html())
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)

    })

    test('debe de mostrar el componente <MultipleCustomHooks />', () => {
        wrapper.find('button').simulate('click');
        console.log(wrapper.html())
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)
    })    
    
})
