import "jest-canvas-mock";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

jest.mock("colorthief", () => {
	return jest.fn().mockImplementation(() => ({
		getColor: jest.fn(() => [0, 0, 0])
	}));
});

Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: jest.fn().mockImplementation(query => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(),
		removeListener: jest.fn(),
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn()
	}))
});

configure({adapter: new Adapter()});
