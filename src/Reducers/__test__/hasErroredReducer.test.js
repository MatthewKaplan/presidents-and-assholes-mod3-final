import * as actions from "../../Actions/index";
import MockData from "../../Helper/mockData";
import hasErroredReducer from "../hasErroredReducer";

const error = "this is a mock error";

describe("hasErroredReducer", () => {
  it("should return state on default", () => {
    const expected = '';
    const result = hasErroredReducer(undefined, []);
    expect(result).toEqual(expected);
  });

  it("should return state with an array of news", () => {
    const expected = error;
    const result = hasErroredReducer(undefined, actions.hasErrored(error));

    expect(result).toEqual(expected);
  });
});