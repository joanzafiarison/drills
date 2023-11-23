

export const logIn = () => {
    return true;
}

export const isLoggedIn = async() => {
    let fakeToken ="IHhImsoAèçéjKd£";
    let urlBase = "http://localhost:5000/api";
    //1 - si token ... get user data | sinon redirect Signup ou Dash vide
    //api.post.auth
    let response = {}
    let init = {
        method : "POST"
    }
    if (fakeToken != "" ) {
        //response = await fetch(urlBase,init)
        //console.log(response)
        if(fakeToken == "IHhImsoAèçéjKd£"){
            response = {
                token : "IHhImsoAèçéjKd£",
                email : "monEmail@gmail.com",
                username :"bendo"
            }
        }
    }
    else {
        console.log("redirection a Home")
    }

    return response;
}