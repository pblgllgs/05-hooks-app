import { mount } from 'enzyme'
import { LoginScreen } from '../../../components/09-useContext/LoginScreen'
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('pruebas sobre <LoginScreen />', () => {
    const setUser = jest.fn()
    const user = {
        id: 123,
        name: 'pablo',
        email: 'pablo@gmail.com'
    } 
    const wrapper = mount(
        //se agrega un contexto para la prueba y se utiliza el valor de usuario creado
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    );
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })
    test('debe de ejecutar el setuser con el argumento esperado', () => {
        //wrapper.find('button').prop('onClick')(user) otra forma utilizando los prop del elemnto html
        //simulamos el click y mandamos como parametro el user
        wrapper.find('button').simulate('click', { target: { user } })
        //se compara con un snapshot
        expect(wrapper).toMatchSnapshot();
        //se espera que se llame la funcion con un objeto user como parametro
        expect(setUser).toHaveBeenCalledWith(user)
    })
})
