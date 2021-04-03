var db = firebase.database();

function handleSendPost() {
    try {
        var post = db.ref("posts").push().set({
            "msg": id("message").value
        });
    } catch(error) {
        console.log(error);
    }
    id("message").value = "";
}

db.ref("posts").on("value", snap => {
    var html = "";
    Object.values(snap.val()).forEach(elem => {
        html += "<div><p>" + elem.msg + "</p></div>";
    });
    id("posts").innerHTML = html;
});