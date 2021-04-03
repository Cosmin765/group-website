var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
        hide(id("not-logged"));
        show(id("logged"));
        id("user-email").innerHTML = "Logged as " + user.email;
    } else {
        hide(id("logged"));
        show(id("not-logged"));
    }
});

function handleSignIn() {
    firebase.auth().signInWithPopup(provider)
    .then(result => {
        console.log("Signed successfully");

    })
    .catch(error => {
        console.log(error);
    });
}

function handleLogout() {
    firebase.auth().signOut()
    .then(() => {
        console.log("Logout successfully");
    })
    .catch(error => {
        console.log(error);
    });
}