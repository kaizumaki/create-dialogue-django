export function read(repository,page = 1) {
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

export function add(repository,data) {
  return data_access(`/api/v1/${repository}`,'POST',data)
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
      'Authorization' : " Basic " + btoa("webstaff:staffnws"),
    },
  });
}

function data_access(url,method,data) {
  return _access(url,{
    method:method,
    headers: {
      'content-type': 'application/json',
      'Authorization' : " Basic " + btoa("webstaff:staffnws"),
    },
    body:JSON.stringify(data)
  });
}

function _access(url,config) {
  // console.log("---send---");
  // console.log(config);
  return fetch(url,config)
    .then( result => {
      // console.log('result : ', result);
      return result.json();
    })
    .then( json => {
      return { payload:json }
    })
    .catch( error => {
      // console.log('error : ', error);
      return { error }
    });
}
