import { mount } from "enzyme";
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("pruebas en al <AppRouter />", () => {
    //se cre un user para el test
    const user = {
        id: 123,
        name: "pablo",
    };
    //capturamos el componente montado que sta dentro de un contexto que tiene un usuario
    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <AppRouter />
        </UserContext.Provider>
    );
    test("debe de mostrarse correctamente", () => {
        //se hace una comparacion con el snapshot
        expect(wrapper).toMatchSnapshot();
    });
});
