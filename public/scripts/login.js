var provider = new firebase.auth.GoogleAuthProvider();

function handleSignIn() {
    firebase.auth().signInWithRedirect(provider);
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