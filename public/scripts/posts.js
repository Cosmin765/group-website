var db = firebase.database();

function handleSendPost() {
    var post = db.ref("posts").push();
    post.set({
        "msg": id("message").value
    });
    id("message").value = "";
}