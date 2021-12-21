import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { shallow } from "enzyme";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

//para poder simular la utilizacion y comportamiento de los hooks
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Pruebas en MultiplecustomHooks", () => {
    
    //para ejecutar despues de cada test este trozo de codigo
    beforeEach(() => {
        useCounter.mockReturnValue({
            counter: 1,
            increment: () => { },
        });
    });

    //
    test("Debe de mostrarse correctamente", () => {
        //se simula le retorno de un hook
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });
        //se captura el contenido del componente montado
        const wrapper = shallow(<MultipleCustomHooks />);
        //se compara con un snapshot
        expect(wrapper).toMatchSnapshot();
    });

    test("debe de mostrar la información", () => {
        //se simula le retorno de un hook
        useFetch.mockReturnValue({
            data: [
                {
                    author: "pablo",
                    quote: "Hola mundo",
                },
            ],
            loading: false,
            error: null,
        });
        //se captura el contenido del componente montado
        const wrapper = shallow(<MultipleCustomHooks />);
        //se espera que no exista un elemento con className '.alert'
        expect(wrapper.find(".alert").exists()).toBe(false);
        //se espera que el contenido del elemento que contenga '.mb-0' sea 'Hola mundo'
        expect(wrapper.find(".mb-0").text().trim()).toBe("Hola mundo");
        //se espera que el contenido del elemento 'figcaption' sea 'pablo'
        expect(wrapper.find("figcaption").text().trim()).toBe("pablo");
    });
});
