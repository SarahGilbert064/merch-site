import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return( 
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
        <h3>{props.itemName} - {props.quantity}</h3>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  itemName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;