import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return( 
    <React.Fragment>
      <h3>{props.itemName}</h3>
      <p>{props.description} - {props.quantity}</p>
    </React.Fragment>
  );
}

Item.propTypes = {
  itemName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Item;