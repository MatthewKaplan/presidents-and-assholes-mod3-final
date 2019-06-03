import * as actions from "../../Actions/index";
import MockData from "../../Helper/mockData";
import presidentsReducer from "../presidentsReducer";

const president = MockData.mockPresident;

describe("presidentsReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = presidentsReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it("should return state with an array of news", () => {
    const expected = president;
    const result = presidentsReducer(undefined, actions.allPresidents(president));

    expect(result).toEqual(expected);
  });
});