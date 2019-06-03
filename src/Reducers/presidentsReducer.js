export default (state = [], action) => {
  switch(action.type) {
    case "ALL_PRESIDENTS":
      return action.presidents;
    default:
      return state;
  }
}