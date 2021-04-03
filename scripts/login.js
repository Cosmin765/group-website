var provider = new firebase.auth.GoogleAuthProvider();

function handleSignIn() {
    firebase.auth().signInWithPopup(provider)
    .then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    });
}