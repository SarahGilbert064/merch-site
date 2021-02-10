import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return( 
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.description} - {props.quantity}</p>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.int.isRequired
};

export default Item;