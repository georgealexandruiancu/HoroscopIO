var cardHolder = document.getElementById("cardHolder");
var card = [];
firebase.auth().onAuthStateChanged(user => {
    userIdGlobal = firebase.auth().currentUser;
    if(user) {
        var userId = user.uid;
        var userZodiac;
        console.log(user);
        firebase.database().ref('/users/' + userId).once('value', function(snapshot) {
            userZodiac = snapshot.val().zodiac;
        });
        firebase.database().ref('/saved/' + userId).once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var childKey = childSnapshot.key;
              var childData = childSnapshot.val();
              cardHolder.insertAdjacentHTML('beforeend', `
              <div class="row mt-10">
              <div class="col-md-12 holder-card">
                  <div class="row">
                      <div class="col-md-12 text">
                         ${childData.horoscop}
                      </div>
                      <div class="col-md-12">
                          <div class="left">
                              Date: ${childData.date}
                          </div>
                          <div class="right">
                              Zodiac: ${userZodiac}
                          </div>
                      </div>
                  </div>
                </div>
                </div>
              `);
            });
          });
          console.log(card);
          firebase.database().ref('/users/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
            var photoNavBar = document.getElementById("photoNavBar");
            var nameSite = document.getElementById("name");
            
            photoNavBar.innerHTML = `<img src="${snapshot.val().imgURL}" alt="">`;
            nameSite.innerHTML = "Hi, "+ snapshot.val().username;
        });
    }else{

    }
});
