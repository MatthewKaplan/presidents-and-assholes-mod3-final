import { mapStateToProps } from "./CardContainer";

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      presidents: [],
      error: '',
      loading: true
    };
    const expected = {
      presidents: [],
      error: '',
      loading: true
    };

    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});
