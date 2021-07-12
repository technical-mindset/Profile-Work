let emailE1 = document.getElementsByClassName('email1')[0];
let passwordE1 = document.getElementsByClassName('password1')[0];

function authFunc(){
    firebase.auth().createUserWithEmailAndPassword(emailE1.value, passwordE1.value)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log(user, userCredential)
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(error);
    });
}
function login() {
    firebase.auth().signInWithEmailAndPassword(emailE1.value, passwordE1.value)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        })

}