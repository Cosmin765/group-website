var provider = new firebase.auth.GoogleAuthProvider();
hide(id("logged"));

function handleSignIn() {
    firebase.auth().signInWithPopup(provider)
    .then(result => {
        hide(id("not-logged"));
        show(id("logged"));
        id("user-email").innerHTML = "Logged as " + result.user.email;
        console.log("Signed successfully");

    })
    .catch(error => {
        console.log(error);
    });
}

function handleLogout() {
    firebase.auth().signOut()
    .then(() => {
        hide(id("logged"));
        show(id("not-logged"));
        console.log("Logout successfully");
    })
    .catch(error => {
        console.log(error);
    });
}