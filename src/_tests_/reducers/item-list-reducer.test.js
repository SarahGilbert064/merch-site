import itemListReducer from '../../reducers/item-list-reducer';

describe('itemListReducer', () => {

  const currentState = {
    1: {itemName : "Dumpster Fire",
    description: "The year was 2020....",
    quantity: 10,
    id: 1 },
    2: {itemName: "Trauma Llama",
    description: "Llama plushie for your desk",
    quantity: 50,
    id: 2 }
  }

  let action;
  const itemData = {
    itemName : "Dumpster Fire",
    description: "The year was 2020....",
    quantity: 10,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(itemListReducer({}, { type: null})).toEqual({});
  });

  test('Should successfully add new item data to masterItemList', () => {
    const { itemName, description, quantity, id } = itemData;
    action = {
      type: 'ADD_ITEM',
      itemName: itemName,
      description: description,
      quantity: quantity,
      id: id 
    };

    expect(itemListReducer({}, action)).toEqual({
      [id] : {
        itemName: itemName,
        description: description,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should successfully delete an item', () => {
    action = {
      type: 'DELETE_ITEM',
      id: 1
    };
    expect(itemListReducer(currentState, action)).toEqual({
      2: {itemName: "Trauma Llama",
    description: "Llama plushie for your desk",
    quantity: 50,
    id: 2 }
    });
  });

});