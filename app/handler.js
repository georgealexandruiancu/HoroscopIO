var database = firebase.database();

var userName;
var userDate;
var userEmail;
var userPass;

function register() {
    userName = document.getElementById("regName").value;
    userDate = document.getElementById("regDate").value;
    userEmail = document.getElementById("regEmail").value;
    userPass = document.getElementById("regPass").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        alert(errorMessage);
    });
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            dateSplit = userDate.split("-");
            month = parseInt(dateSplit[1]);
            day = parseInt(dateSplit[2]);
            if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
                alert("capricorn");
                firebase.database().ref('users/' + user.uid).set({
                    zodiac: "capricorn",
                    zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Fcapricornus.png?alt=media&token=d5ba5708-87e0-420f-907b-289e32cf4810"
                });
    
            } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
                alert("aquarius");
                firebase.database().ref('users/' + user.uid).set({
                    zodiac: "aquarius",
                    zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Faquarius.png?alt=media&token=49032d3c-c30a-4ffc-80a8-4b63b1ce9008"
                });
    
            } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
                firebase.database().ref('users/' + user.uid).set({
                    zodiac: "pisces",
                    zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Fpisces.png?alt=media&token=04d02bea-061b-4bb1-9eed-e4e5a8db209c"
                });
                alert("pisces");
    
            } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
                firebase.database().ref('users/' + user.uid).set({
                    zodiac: "aries",
                    zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Faries.png?alt=media&token=ce444af0-f511-4cc9-b0a0-1a84467e14b5"
                });
                alert("aries");
    
            } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
                firebase.database().ref('users/' + user.uid).set({
                    zodiac: "taurus",
                    zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Ftaurus.png?alt=media&token=c696c95e-5aef-457e-a5de-db8303681a16"
                });
                alert("taurus");
    
            } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
                firebase.database().ref('users/' + user.uid).set({
                    zodiac: "gemini",
                    zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Fgemini.png?alt=media&token=5c3d9bfc-ed8e-40f3-89ad-f7573c6e01c3"
                });
                alert("gemini");
    
            } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
                firebase.database().ref('users/' + user.uid).set({
                    zodiac: "cancer",
                    zodiacImg: " https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Fcancer.png?alt=media&token=3262bb0b-2535-4633-b20f-162f47023216"
                });
                alert("cancer");
            } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
                firebase.database().ref('users/' + user.uid).set({
                    zodiac: "leo",
                    zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Fleo.png?alt=media&token=ee635e5a-87fc-4795-93b3-ce176db603aa"
                });
                alert("leo");
            } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
                firebase.database().ref('users/' + user.uid).set({
                    zodiac: "virgo",
                    zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Fvirgo.png?alt=media&token=972580e8-4c1c-43f4-b595-7f80caeea8ce"
                });
                alert("virgo");
            } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
                firebase.database().ref('users/' + user.uid).set({
                    zodiac: "libra",
                    zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Fleo.png?alt=media&token=ee635e5a-87fc-4795-93b3-ce176db603aa"
                });
                alert("libra");
            } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
                firebase.database().ref('users/' + user.uid).set({
                    zodiac: "scorpion",
                    zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Fscorpio.png?alt=media&token=4bf606c3-b1e8-4519-8571-6c47aab08643"
                });
                alert("scorpio");
            } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
                firebase.database().ref('users/' + user.uid).set({
                    zodiac: "sagittarius",
                    zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Fsagittarius.png?alt=media&token=094d36ce-f4f5-4ab3-bc33-6fcc9ce9ea71"
                });
                alert("sagittarius");
            }
            firebase.database().ref('users/' + user.uid).update({
                username: userName,
                email: userEmail,
                date: userDate
            });
            window.location = 'mainPage.html'; //After successful login, user will be redirected to mainPage.html
        }
    });

}

function logout() {
    firebase.auth().signOut();
    alert("You are logged out! Please sign in");
}
function logInWithCreds(){
    var userEmail = document.getElementById("regEmail").value;
    var userPass = document.getElementById("regPass").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(window.location = 'mainPage.html').catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        alert(errorMessage);
    });
}
// document.getElementById('loginBtn').addEventListener('click', function(){
//     var userEmail = document.getElementById("regEmail").value;
//     var userPass = document.getElementById("regPass").value;
 
//     firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(window.location = 'mainPage.html').catch(function (error) {
//         var errorCode = error.code;
//         var errorMessage = error.message;

//         console.log(errorCode);
//         alert(errorMessage);
//     });

//     // firebase.auth().onAuthStateChanged(user => {
//     //     if (user) {
//     //         window.location = 'mainPage.html';
//     //     }else{
//     //         window.location = 'mainPage.html';
//     //     }
//     // });
// });
var fbDateBirth;
function loginFacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        firebase.database().ref('users/' + user.uid).update({
            username: user.displayName,
            email: user.email,
            imgURL: user.photoURL,
        });
        async function getID(){
            const id = await $.ajax({
                    type:'GET',
                    url: `https://graph.facebook.com/me?access_token=${token}`,
                    success:function(data){
                        return data;
                    }
                });
            return id;
        }
        getID().then(function(result){
            console.log(result.id);
            FB.api(
                `/me?fields=birthday`,
                'GET',
                {"access_token": token},
                function(response){
                    console.log(response);
                    fbDateBirth = response;
                    firebase.auth().onAuthStateChanged(user => {
                        if (user) {
                            firebase.database().ref('users/' + user.uid).update({
                                date: response.birthday
                            });
                            console.log(user);
                        }
                    });
                        dateSplit = response.birthday.split("/");
                        month = parseInt(dateSplit[0]);
                        day = parseInt(dateSplit[1]);
                        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
                            alert("capricorn");
                            firebase.database().ref('users/' + user.uid).update({
                                zodiac: "capricorn",
                                zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Fcapricornus.png?alt=media&token=d5ba5708-87e0-420f-907b-289e32cf4810"
                            });
                
                        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
                            alert("aquarius");
                            firebase.database().ref('users/' + user.uid).update({
                                zodiac: "aquarius",
                                zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Faquarius.png?alt=media&token=49032d3c-c30a-4ffc-80a8-4b63b1ce9008"
                            });
                
                        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
                            firebase.database().ref('users/' + user.uid).update({
                                zodiac: "pisces",
                                zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Fpisces.png?alt=media&token=04d02bea-061b-4bb1-9eed-e4e5a8db209c"
                            });
                            alert("pisces");
                
                        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
                            firebase.database().ref('users/' + user.uid).update({
                                zodiac: "aries",
                                zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Faries.png?alt=media&token=ce444af0-f511-4cc9-b0a0-1a84467e14b5"
                            });
                            alert("aries");
                
                        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
                            firebase.database().ref('users/' + user.uid).update({
                                zodiac: "taurus",
                                zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Ftaurus.png?alt=media&token=c696c95e-5aef-457e-a5de-db8303681a16"
                            });
                            alert("taurus");
                
                        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
                            firebase.database().ref('users/' + user.uid).update({
                                zodiac: "gemini",
                                zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Fgemini.png?alt=media&token=5c3d9bfc-ed8e-40f3-89ad-f7573c6e01c3"
                            });
                            alert("gemini");
                
                        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
                            firebase.database().ref('users/' + user.uid).update({
                                zodiac: "cancer",
                                zodiacImg: " https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Fcancer.png?alt=media&token=3262bb0b-2535-4633-b20f-162f47023216"
                            });
                            alert("cancer");
                        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
                            firebase.database().ref('users/' + user.uid).update({
                                zodiac: "leo",
                                zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Fleo.png?alt=media&token=ee635e5a-87fc-4795-93b3-ce176db603aa"
                            });
                            alert("leo");
                        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
                            firebase.database().ref('users/' + user.uid).update({
                                zodiac: "virgo",
                                zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Fvirgo.png?alt=media&token=972580e8-4c1c-43f4-b595-7f80caeea8ce"
                            });
                            alert("virgo");
                        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
                            firebase.database().ref('users/' + user.uid).update({
                                zodiac: "libra",
                                zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Fleo.png?alt=media&token=ee635e5a-87fc-4795-93b3-ce176db603aa"
                            });
                            alert("libra");
                        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
                            firebase.database().ref('users/' + user.uid).update({
                                zodiac: "scorpion",
                                zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Fscorpio.png?alt=media&token=4bf606c3-b1e8-4519-8571-6c47aab08643"
                            });
                            alert("scorpio");
                        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
                            firebase.database().ref('users/' + user.uid).update({
                                zodiac: "sagittarius",
                                zodiacImg: "https://firebasestorage.googleapis.com/v0/b/horoscopio-e66d1.appspot.com/o/zodiac%2Fsagittarius.png?alt=media&token=094d36ce-f4f5-4ab3-bc33-6fcc9ce9ea71"
                            });
                            alert("sagittarius");
                        }
                        window.location = 'mainPage.html';
                }
            );
        });
      }).catch(function(error) {
       
        var errorCode = error.code;
        var errorMessage = error.message;
       
        var email = error.email;
        
        var credential = error.credential;
       
      });
}
