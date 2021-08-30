import { Injectable } from '@angular/core';
import axios from 'axios';


const dbUsername = "apikey-v2-2809fxu62dw0lybt6awh1vn0jxt1srfscx9z33bhudjy";
const dbPassword = "ff4e6d701676a004128c9bdb601b52d2";
const basicAuth = 'Basic ' + btoa(dbUsername + ':' +dbPassword);
const Url = "https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud/petshop_user/";


@Injectable({
  providedIn: 'root'
})
export class UservalidationService {
 
  constructor() { }

    loginAuth(email:any,password:any){

    const url = Url+"_find"; 
    let loginObj={
      selector:{
    email:email,
    password:password
   },
   fields:["role"]
  };
    return axios.post(url,loginObj,{ headers: {'Authorization': basicAuth }})
   }
  static getUser(){
    const url=Url+"_all_docs?include_docs=true";
       return axios.get(url, { headers: {'Authorization': basicAuth }});
    }
   deleteUser(id:any,rev:any){
      const url = Url+id +'?rev'+rev;
      return axios.delete(url,{ headers: {'Authorization': basicAuth }})
    }

}
