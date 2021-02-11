import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='itemName'
          placeholder='Item name' />
        <br /><br />
        <input
          type='number'
          name='quantity'
          placeholder='Quantity' />
          <br /><br />
        <textarea
          name='description'
          placeholder='Item description' />
          <br /><br />
        <button type='submit'>Add Item</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonTest: PropTypes.string
};

export default ReusableForm;