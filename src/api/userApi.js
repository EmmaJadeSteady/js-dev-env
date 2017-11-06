
import "isomorphic-fetch";
import "es6-promise";
var ES6Promise = require("es6-promise");
ES6Promise.polyfill();
import "axios";
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

import 'whatwg-fetch';


export function getUsers(){
  return get('users');
}
export function deleteUser(id){
  return del(`users/${id}`);
}

function get(url){
return window.fetch(baseUrl + url).then(onSucess, onError);
}

//can't call function delete since reserved work
function del(url){
  console.log("delete record"); //eslint-disable-line no-console
  const request = new Request(baseUrl + url,{
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess, onError);
}

function onSucess(response){
  return response.json();
}
function onError(error){
  console.log(error); //eslint-disable-line no-console
}