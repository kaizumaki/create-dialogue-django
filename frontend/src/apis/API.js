import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export function read(repository) {
  return access(`/api/v1/${repository}/`,'GET')
}

export function readPage(repository,page = 1) {
  return access(`/api/v1/${repository}?page=${page}`,'GET')
}

export function readWord(repository,word,page = 1) {
  return access(`/api/v1/${repository}?word=${word}&page=${page}`,'GET')
}

export function readAll(repository) {
  return access(`/api/v1/${repository}/all`,'GET')
}

export function search(repository,word) {
  return access(`/api/v1/${repository}?word=${word}`,'GET')
}

export function set(repository,id) {
  return data_access(`/api/v1/${repository}/${id}`,'GET')
}

export function create(repository,data) {
  return data_access(`/api/v1/${repository}/`,'POST',data)
}

export function update(repository,id,data) {
  return data_access(`/api/v1/${repository}/${id}`,'PATCH',data)
}

export function destroy(repository,id) {
  return access(`/api/v1/${repository}/${id}`,'DELETE')
}

export function restore(repository,id) {
  return access(`/api/v1/${repository}/${id}`,'PUT')
}

export function fetchUrl(url) {
  return access(url,'GET')
}

export function toggle(repository,id,section) {
  return data_access(`/api/v1/${repository}/${id}/${section}`,'PATCH')
}

function access(url,method) {
  return _access(url,{
    method:method,
    headers: {
      // 'Authorization' : " Basic " + btoa("webstaff:staffnws"),
    },
  });
}

function data_access(url,method,data) {
  return _access(url,{
    method:method,
    headers: {
      'content-type': 'application/json',
      // 'Authorization' : " Basic " + btoa("webstaff:staffnws"),
    },
    data:JSON.stringify(data)
  });
}

function _access(url,config) {
  console.log("---send---");
  console.log(config);
  return axios(url,config)
    .then( response => {
      console.log('response : ', response);
      return { payload: response.data }
    })
    .catch( error => {
      console.log('error : ', error);
      return { error }
    });
}
