import * as actions from "../../Actions/index";
import isLoadingReducer from "../isLoadingReducer";

describe("isLoadingReducer", () => {
  it("should return state on default", () => {
    const expected = false;
    const result = isLoadingReducer(undefined, false);
    expect(result).toEqual(expected);
  });

  it("should return state with an array of news", () => {
    const expected = false;
    const result = isLoadingReducer(undefined, actions.isLoading(false));

    expect(result).toEqual(expected);
  });
});