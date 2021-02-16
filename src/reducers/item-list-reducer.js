export default (state = {}, action) => {
  const { itemName, description, quantity, id } = action;
  switch (action.type) {
  case 'ADD_ITEM':
    return Object.assign({}, state, {
      [id]: {
        itemName: itemName,
        description: description,
        quantity: quantity,
        id: id
      }
    });
  case 'DELETE_ITEM':
    let newState = {...state};
    delete newState[id];
    return newState;
    default:
      return state;
  }
};