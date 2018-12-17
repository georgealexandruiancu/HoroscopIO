
function logout(){
    firebase.auth().signOut();
    alert("gata");
}

var userLogged;
var userIdGlobal = firebase.auth().currentUser;
var textHoro;
var dateHoro;
firebase.auth().onAuthStateChanged(user => {
    userIdGlobal = firebase.auth().currentUser;
    if(user) {
       login = true;
       var nameSite = document.getElementById("name");
       var imgHoroscope = document.getElementById("imgHoroscope");
       var descHoroscope = document.getElementById("descHoroscope");
       var dateHoroscope = document.getElementById("dateHoroscope");
       var luckyNumber = document.getElementById("lucky_number");
       var luckyTime = document.getElementById("lucky_time");
       var mood = document.getElementById("mood");
       var compatibility = document.getElementById("compatibility");
       
       
       var userId = user.uid;
        firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
            var username = snapshot.val().username;
            var date = snapshot.val().date;          
            var email = snapshot.val().email;
            
            nameSite.innerHTML = "Hi, "+ snapshot.val().username;
            imgHoroscope.innerHTML = `<center><img src="${snapshot.val().zodiacImg}" alt=""></center>`;
            dailyURL = `https://aztro.sameerkumar.website?sign=${snapshot.val().zodiac}&day=tomorrow`;
            console.log(dailyURL);
            async function doAjax() {


                const result = await $.ajax({
                    type:'POST',
                    url: dailyURL,
                    success:function(data){
                        return data;
                    }
                });
            
                return result;
            }
            doAjax().then(function(result){
                console.log(result);
                dateHoro = result.current_date;
                descHoroscope.innerHTML = result.description;
                dateHoroscope.innerHTML = "- " + result.current_date + " -";
                luckyNumber.innerHTML = result.lucky_number;
                luckyTime.innerHTML = result.lucky_time;
                mood.innerHTML = result.mood;
                compatibility.innerHTML = result.compatibility;
                textHoro = result.description;
                console.log(textHoro);
            }) 

       });
       firebase.database().ref('/users/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
        var photoNavBar = document.getElementById("photoNavBar");
        var nameSite = document.getElementById("name");
        
        photoNavBar.innerHTML = `<img src="${snapshot.val().imgURL}" alt="">`;
        nameSite.innerHTML = "Hi, "+ snapshot.val().username;
    });
    }else {
        window.location = 'index.html'
    }
}); 
function saveIt() {
    firebase.database().ref('saved/' + firebase.auth().currentUser.uid).push({
      horoscop: textHoro,
      date: dateHoro
    });
}
