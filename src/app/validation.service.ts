import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  ValidateName(value:any,errMessage:any)
  {
    if (value==null||value==undefined)
     {
        throw new Error(errMessage);
    }
  }
  validateEmail(value:any,errMessage:any)
  {
    if (value==null||value.trim()=="")
     {
      throw new Error(errMessage);
    }
  }
  validatePassword(value:any,errMessage:any)
  {
    if (value==null||value.trim()=="")
     {
      throw new Error(errMessage);
    }
  }
}
