const initialState = {
  itemList: []
};

const itemADD = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log("creatingggggggg");
      return {
        ...state,
        itemList: [...state.itemList, action.payload]
      };
    case "READ_ITEMS":
      return {
        ...state.itemList
      };
    case "UPDATE_ITEM":
      console.log("updatingggggg");
      return {
        itemList: state.itemList.map((item, index) => {
          if (index === action.payload.index) {
            return action.payload.item;
          }
          return item;
        })
      };
    default:
      return state;
  }
};
export default itemADD;
