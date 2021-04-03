var db = firebase.database();

function handleSendPost() {
    var post = db.ref("test").set({
        "msg": id("message").value
    }, error => {
        console.log(error);
    });
    id("message").value = "";
}