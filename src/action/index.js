export const addItem = (item) => {
  console.log("item action creator");
  return {
    type: "ADD_ITEM",
    payload: item
  };
};

export const readItem = () => {
  return {
    type: "READ_ITEMS"
  };
};

export const updateItem = (item, index) => {
  return {
    type: "UPDATE_ITEM",
    payload: {
      item,
      index
    }
  };
};
