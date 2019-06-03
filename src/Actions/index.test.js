import * as actions from "./index";
import MockData from "../Helper/mockData";

describe("actions", () => {
  it("should return a type of ALL_PRESIDENTS", () => {
    const presidents = MockData.mockPresident;
    const expected = {
      type: "ALL_PRESIDENTS",
      presidents
    };

    const result = actions.allPresidents(presidents);
    expect(result).toEqual(expected);
  });

  it("should return a type of IS_LOADING", () => {
    const loading = true;
    const expected = {
      type: "IS_LOADING",
      loading
    };

    const result = actions.isLoading(loading);
    expect(result).toEqual(expected);
  });

  it("should return a type of HAS_ERRORED", () => {
    const error = "Mock Error";
    const expected = {
      type: "HAS_ERRORED",
      error
    };

    const result = actions.hasErrored(error);
    expect(result).toEqual(expected);
  });
});