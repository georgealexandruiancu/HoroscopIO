
var input = document.getElementsByClassName("input-login");
var icon = document.getElementsByClassName("fas");
$(input).hover(function(){
    $(icon).css("margin-left","0");
    $(input).css("padding-left","10");
}, function(){
    $(icon).css("margin-left","40");
    $(input).css("padding-left","40");
});
$(input).click(function(){
    $(icon).css("margin-left","0");
})
$(input).focus(function() {
    $(icon).css("margin-left","0");
});
$("#buttonNav").click(function(){
    var toggleWidth = $("#nav").width() == 250 ? "0px" : "250px";
        $('#nav').animate({ width: toggleWidth });
})
$("#openNav").click(function(){
    var toggleWidth = $("#nav").width() == 250 ? "0px" : "250px";
        $('#nav').animate({ width: toggleWidth });
})
// swiped-left
document.addEventListener('swiped-left', function(e) {
    var toggleWidth = $("#nav").width() == 250 ? "0px" : "250px";
    $('#nav').animate({ width: toggleWidth });
});
  
  // swiped-right
document.addEventListener('swiped-right', function(e) {
    var toggleWidth = $("#nav").width() == 250 ? "0px" : "250px";
    $('#nav').animate({ width: toggleWidth });
});

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("allPage").style.opacity = "1";
}
