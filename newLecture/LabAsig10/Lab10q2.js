//Q#2
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
    }
    let user = {
    name: 'John',
    loginOk() {
    alert(`${this.name} logged in`);
    },
    loginFail() {
    alert(`${this.name} failed to log in`);
    },
    };
     askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
     askPassword(user.loginOk.call(user), user.loginFail.call(user)); 
     askPassword(user.loginOk.apply(user), user.loginFail.apply(askPassword));
     askPassword(()=>user.loginOk, ()=>user.loginFail);
    // askPassword(user.loginOk.call(askPassword), user.loginFail.call(askPassword));
    // askPassword(user.loginOk.apply(askPassword), user.loginFail.apply(askPassword));
    //using bind(),call() and apply()methodes.
    //  setTimeout(user.loginOk.bind(user),2000,user.loginFail.bind(user),2000);
    //  setTimeout(()=>user.loginOk.call(user),2000,()=>user.loginFail.call(user),2000);
    //  setTimeout(()=>user.loginOk.apply(user),2000,()=>user.loginFail.apply(user),2000);
    // //using Wrapper method
    // setTimeout(function(){user.loginOk();},function(){user.loginFail();})
    