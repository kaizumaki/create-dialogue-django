import { connect } from 'react-redux';
import ConfirmRequestList from './confirmRequestList.jsx'

function mapStateToProps(state) {
  let items = [];
  const createItem = (t,v) => {
    return {
      title: t,
      value: v
    }
  };

  items.push(createItem(state.name.title_name, state.name.name));

  if(state.name.kana){
    items.push(createItem(state.name.title_kana, state.name.kana));
  }
  if(state.gender.value){
    items.push(createItem(state.gender.title, state.gender.value));
  }
  if(state.parent_name.value){
    items.push(createItem(state.parent_name.title, state.parent_name.value));
  }
  if(state.zip.value){
    items.push(createItem(state.zip.title, state.zip.value));
  }
  if(state.address.value){
    items.push(createItem(state.address.title, state.address.value));
  }
  if(state.building.value){
    items.push(createItem(state.building.title, state.building.value));
  }
  if(state.tel.value){
    items.push(createItem(state.tel.title, state.tel.value));
  }
  if(state.mail.value){
    items.push(createItem(state.mail.title, state.mail.value));
  }
  if(state.school.name){
    items.push(createItem(state.school.title, state.school.value));
  }
  if(state.school_year.value){
    items.push(createItem(state.school_year.title, state.school_year.value));
  }
  if(state.age.value){
    items.push(createItem(state.age.title, state.age.value));
  }
  if(state.contact.value) {
    items.push(createItem(state.contact.replyToTitle, state.contact.replyTo));
  }
  return {
    items:items,
    contact:createItem(state.contact.title, state.contact.value)
  };
}

export default connect(mapStateToProps)(ConfirmRequestList);
