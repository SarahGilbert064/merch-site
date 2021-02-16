import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

function ItemList(props) {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.itemlist).map((item) =>
        <Item 
          whenItemClicked = { props.onItemSelection }
          itemName={item.itemName}
          description={item.description}
          quantity={item.quantity}
          id={item.id}
          key={item.id}
        />
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.object,
  onItemSelection: PropTypes.func
};

export default ItemList;