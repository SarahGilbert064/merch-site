import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

function ItemList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.itemList.map((item, index) =>
        <Item 
          itemName={item.itemName}
          description={item.description}
          quantity={item.quantity}
          key={index}
        />
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList;