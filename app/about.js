var selector = document.getElementById("signSelector");
var titleFacts = document.getElementById("title-facts-sign");
var descFacts = document.getElementById("desc-facts-sign");
var titlePers = document.getElementById("title-pers-sign");
var descPers = document.getElementById("desc-pers-sign");
selector.addEventListener("change", function() {

   firebase.database().ref('/facts/' + selector.value).once('value').then(function(snapshot) {
        console.log(snapshot.val().facts);
        console.log(snapshot.val().personality);
        titleFacts.innerHTML = `The ${selector.value} Facts: `;
        descFacts.innerHTML = snapshot.val().facts;
        titlePers.innerHTML = `The ${selector.value} Personality: `;
        descPers.innerHTML = snapshot.val().personality;
   });
});
firebase.auth().onAuthStateChanged(user => {
    userIdGlobal = firebase.auth().currentUser;
    if(user) {
        firebase.database().ref('/users/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
            var photoNavBar = document.getElementById("photoNavBar");
            var nameSite = document.getElementById("name");
            
            photoNavBar.innerHTML = `<img src="${snapshot.val().imgURL}" alt="">`;
            nameSite.innerHTML = "Hi, "+ snapshot.val().username;
        });
    }else{

    }
});