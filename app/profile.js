var fileButton = document.getElementById('fileButton');
var uploader = document.getElementById('uploader');
firebase.auth().onAuthStateChanged(user => {
    userIdGlobal = firebase.auth().currentUser;
    if(user) {
        fileButton.addEventListener('change', function(e){
            var file = e.target.files[0];
            console.log(file);
            var storageRef = firebase.storage().ref('avatars/'+ firebase.auth().currentUser.uid + "/" + firebase.auth().currentUser.uid);
            var task = storageRef.put(file);
            task.on('state_changed', 
                function progress(snapshot){
                    // var percentage = (snapshot.bytesTransfered / snapshot.totalBytes) * 100;
                    // console.log(percentage);
                    //     $(".progress-bar").each(function(){
                    //         console.log(percentage);
                    //         each_bar_width = percentage;
                    //         $(this).width(each_bar_width + '%');
                    //     });
                },
                function error(err){

                },
                function complete(){
                    alert("Your avatar is uploaded!");
                    var storageAvatars = firebase.storage().ref('avatars/'+ firebase.auth().currentUser.uid + "/" + firebase.auth().currentUser.uid);
                    storageAvatars.getDownloadURL().then(function(url) {
                        firebase.database().ref('users/' + firebase.auth().currentUser.uid).update({
                            imgURL: url
                        });
                    })
                }
            );
        });
        firebase.database().ref('/users/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
            var imgProfile = document.getElementById('imgProfile');
            var username = document.getElementById('username');
            var imgHoroscope = document.getElementById("imgHoroscope");
            var userDate = document.getElementById("userDate");
            var zodiac = document.getElementById("zodiac");
            var photoNavBar = document.getElementById("photoNavBar");
            var nameSite = document.getElementById("name");
            
            
            imgProfile.innerHTML = `<img src="${snapshot.val().imgURL}" alt="">`
            username.innerHTML = snapshot.val().username;
            photoNavBar.innerHTML = `<img src="${snapshot.val().imgURL}" alt="">`;
            imgHoroscope.innerHTML = `<center><img src="${snapshot.val().zodiacImg}" alt=""></center>`;
            userDate.innerHTML = snapshot.val().date;
            zodiac.innerHTML = snapshot.val().zodiac;
            nameSite.innerHTML = "Hi, "+ snapshot.val().username;
            
            
            
            
        });
    }else{

    }
});
    