import { connect } from 'react-redux';
import koyomi from 'koyomi';
import ConfirmEventList from './confirmEventList.jsx'

function mapStateToProps(state) {
  let items = [];
  const createItem = (t,v) => {
    return {
      title: t,
      value: v
    }
  };

  const dateSortJoin = (array)=> {
    return array.sort((a,b)=>{
      const a_date = new Date(a.date);
      const b_date = new Date(b.date);
      if(a_date.getTime() < b_date.getTime()) return -1;
      if(a_date.getTime() > b_date.getTime()) return 1;
      return 0
    }).map((item)=>{
      return koyomi.format(item.date, 'M月D日(ff>1)');
    }).join('、');
  };

  if(state.gakusetsu.value.length !== 0){
    items.push(createItem(state.gakusetsu.title, dateSortJoin(state.gakusetsu.value)));
  }
  if(state.taiken_zemi.value.length !== 0){
    items.push(createItem(state.taiken_zemi.title, dateSortJoin(state.taiken_zemi.value)));
  }
  if(state.kengaku.valueDate){
    items.push(createItem(state.kengaku.title, state.kengaku.formattedDate + ' ' + state.kengaku.valueTime));
  }

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

export default connect(mapStateToProps)(ConfirmEventList);
