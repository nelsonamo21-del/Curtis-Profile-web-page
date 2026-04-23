var infoBtn = document.getElementById("info");
var profileDetails = document.getElementById("profileDetails");
var picBtn = document.getElementById("pic");
var profilePic = document.getElementById("profilePic");
infoBtn.onclick = function() {
    if (profileDetails.style.display === "none") {
        profileDetails.style.display = "block";
        infoBtn.innerHTML = "Hide My Info";
    } 
    else {
        profileDetails.style.display = "none";
        infoBtn.innerHTML = "Show My Info";
    }
};
picBtn.onclick = function() {
    if (profilePic.style.display === "none") {
        profilePic.style.display = "block";
        picBtn.innerHTML = "Hide My Picture";
    } 
    else {
        profilePic.style.display = "none";
        picBtn.innerHTML = "Show My Picture";
    }
};