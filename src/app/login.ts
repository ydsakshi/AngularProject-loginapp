export class Login {

userName: string;
password: string;

// below case is handled by below constructor
// constructor(){}

// below values is a blank json object[if not provided anything],"={}"-->is a default value
// use of Object[assign method] for handling multiple arguments,generic
constructor(values: Object={}){
Object.assign(this,values);
}
}
