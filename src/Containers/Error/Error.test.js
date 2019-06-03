import { mapStateToProps } from "./Error";

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      error: ''
    };
    const expected = {
      error: ''
    };

    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});