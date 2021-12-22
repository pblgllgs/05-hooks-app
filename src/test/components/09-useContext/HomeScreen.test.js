import { mount } from 'enzyme'
import { HomeScreen } from '../../../components/09-useContext/HomeScreen'
import { UserContext } from '../../../components/09-useContext/UserContext'

describe('pruebas en <HomeScreen />', () => {
    //se crea un user para usar en el test
    const user = {
        name:'pablo',
        email: 'pblgllgs@gmail.com'
    }
    //capturamos el componente montado
    const wrapper = mount(
        //se agrega un contexto para la prueba y se utiliza el valor de usuario creado
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );
    test('debe de mostrarse correctamente', () => {
        //coomparamos con un snapshot
        expect(wrapper).toMatchSnapshot()
    })
})
