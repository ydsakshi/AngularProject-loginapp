import { Login } from './login';

describe('Login', () => {
  it('should create an instance', () => {
    expect(new Login()).toBeTruthy();
  });
  it('should create object with user-defined values',()=>{
    let login_test: Login=new Login({"userName":"abhi","password":"abhi"});
    expect(login_test.userName).toEqual("abhi");
    expect(login_test.password).toEqual("abhi");
  });
  
});
