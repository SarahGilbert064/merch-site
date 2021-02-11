import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';

class StoreControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: [],
      selectedItem: null,
      editing: false
    };
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingItemInList = (itemToEdit) => {
    const editedMasterItemList = this.state.masterItemList  
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
      masterItemList: editedMasterItemList,
      editing:false,
      selectedItem: null
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({masterItemList: newMasterItemList, formVisibleOnPage: false });
  }

  handleDeletingItem = (id) => {
    const newMasterItemList = this.state.masterItemList.filter(item => item.id !== id);
    this.setState({
      masterItemList: newMasterItemList,
      selectedItem: null
    });
  }

  // handleBuyingItem = (quantity) => {
  //   const newMasterItemList = this.state.masterItemList.filter(item => item.quantity - quantity);
  //     this.setState({
  //       masterItemList: newMasterItemList,
  //       selectedItem: null
  //     });     
  // }

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
      itemList={this.state.masterItemList}
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

export default StoreControl;