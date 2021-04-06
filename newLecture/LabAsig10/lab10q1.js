//Q#1
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  //askPassword(?, ?); // ?

    askPassword(()=>user.loginOk(true), ()=>user.loginFail(false));
    askPassword(user.loginOk.bind(user,true),user.loginFail.bind(user,false));
    askPassword(()=>user.loginOk.call(user,true),()=>user.loginFail.call(user,false));
    askPassword(()=>user.loginOk.apply(user,true),()=>user.loginFail.apply(user,false))
/////////////////////////////////////////////////////////////////////////////////////////////
