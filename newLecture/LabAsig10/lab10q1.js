//Q#1
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
    askPassword(()=>user.loginOk(true), ()=>user.loginFail(false));
    askPassword(user.loginOk.bind(user,true),user.loginFail.bind(user,false));
    askPassword(()=>user.loginOk.call(user,true),()=>user.loginFail.call(user,false));
    askPassword(()=>user.loginOk.apply(user,true),()=>user.loginFail.apply(user,false))
