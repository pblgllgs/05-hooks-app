import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { shallow } from "enzyme";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Pruebas en MultiplecustomHooks", () => {
    
    beforeEach(() => {
        useCounter.mockReturnValue({
            counter: 1,
            increment: () => { },
        });
    });

    test("Debe de mostrarse correctamente", () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test("debe de mostrar la información", () => {
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
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper.find(".alert").exists()).toBe(false);
        expect(wrapper.find(".mb-0").text().trim()).toBe("Hola mundo");
        expect(wrapper.find("figcaption").text().trim()).toBe("pablo");
    });
});
