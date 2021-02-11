import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditItemForm (props) {
  const { item } = props;

  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({
      itemName: event.target.itemName.value, 
      quantity: parseInt(event.target.quantity.value), 
      description: event.target.description.value, 
      id: item.id
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditItemFormSubmission}
        buttonText="Update Item"
      />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func
}
export default EditItemForm;