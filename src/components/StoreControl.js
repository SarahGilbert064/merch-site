import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class StoreControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      formVisibleOnPage: false,
      selectedItem: null,
      editing: false
    };
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingItemInList = (itemToEdit) => {
    const { dispatch } = this.props;
    const { id, itemName, description, quantity } = itemToEdit;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      itemName: itemName,
      description: description,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedItem: null
    });
  }


  handleChangingSelectedItem = (id) => {
    const selectedItem = this.props.masterItemList[id];
    this.setState({selectedItem: selectedItem});
  }

  handleAddingNewItemToList = (newItem) => {
    const { dispatch } = this.props;
    const { id, itemName, description, quantity } = newItem;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      itemName: itemName,
      description: description,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleDeletingItem = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TICKET',
      id: id
    }
    dispatch(action);
    this.setState({selectedItem: null});
  }

  handleBuyingItem = () => {
    const selectedItem = this.state.selectedItem; //selects item that is currently selected and viewed in details page
    const newQuantity = Object.assign({}, selectedItem, {quantity: selectedItem.quantity - 1}); //this targets the selectedItem and it's quantity, and assigns it the new quantity
    const newItemList = this.state.masterItemList
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(newQuantity); //updates the item list
    this.setState({
      masterItemList: newItemList,
      selectedItem: newQuantity
    });
  }  

    //buy handle click, trying to minus from item quantity

  handleClick = () => {
    if(this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if(this.state.editing) {
      currentlyVisibleState = 
      <EditItemForm
      item = {this.state.selectedItem}
      onEditItem = {this.handleEditingItemInList}
      />
      buttonText = "Return to Item List";
  
    } else if (this.state.selectedItem != null) {
      currentlyVisibleState = 
      <ItemDetail 
      item = {this.state.selectedItem} 
      onClickingDelete = {this.handleDeletingItem}
      onClickingEdit = {this.handleEditClick}
      onClickingBuy = {this.handleBuyingItem}
      />
      buttonText = "Return to Item List";

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewItemForm 
      onNewItemCreation={this.handleAddingNewItemToList} 
      />
      buttonText = "Return to Item List";

    } else {
      currentlyVisibleState = 
      <ItemList 
      itemList={this.props.masterItemList}
      onItemSelection={this.handleChangingSelectedItem} 
      />;
      buttonText = "Add Item";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

StoreControl.propTypes = {
  masterItemList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterItemList: state
  }
}

StoreControl = connect(mapStateToProps)(StoreControl);

export default StoreControl;