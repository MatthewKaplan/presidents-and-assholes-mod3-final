import MockData from "../../Helper/mockData";
import * as actions from "../../Actions/index";
import { mapDispatchToProps } from "./App";

const president = MockData.mockPresident;

const error = "This is a mock error message";

describe("mapDispatchToProps", () => {
  it("should call dispatch for allPresidents", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.allPresidents(president);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.allPresidents(president);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for hasErrored", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.hasErrored(error);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.hasErrored(error);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for isLoading", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.isLoading(true);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.isLoading(true);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
