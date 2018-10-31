/**
 * post form data
 * @param data
 * @returns {Promise<{payload: Response} | never | {error: any}>}
 */
export function send(data) {
  const url = data.type === 'send'
    ? `/api/v1/${data.pageName}`
    : `/api/v1/${data.type}`;
  return fetch(url,{
    credentials: 'include',
    method: 'POST',
    body: data.formData
  })
    .then( res => res.json() )
    .then( payload => {
      return { payload }
    } )
    .catch( error => {
      return { error }
    });
}

/**
 * jsonをURLから読み取ってくる
 * @param data
 * @returns {Promise.<>}
 */
export function getJson(data) {
  return fetch(data.accessURL,{
    credentials: 'include',
    method: 'GET',
  })
    .then( res => res.json() )
    .then( payload => {
      return { payload }
    } )
    .catch( error => {
      return { error }
    });
}
