var provider = new firebase.auth.GoogleAuthProvider();

function handleSignIn() {
    firebase.auth().signInWithPopup(provider)
    .then(result => {
        console.log(result.user);
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