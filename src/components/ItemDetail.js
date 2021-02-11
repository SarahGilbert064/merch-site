import React from 'react';
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item, onClickingDelete } = props;

  return(
    <React.Fragment>
      <h1>Item Details</h1>
      <h3>{item.itemName} - {item.quantity}</h3>
      <p>{item.description}</p>
      <button onClick ={() => onClickingDelete(item.id) }>Delete Item</button>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default ItemDetail;

