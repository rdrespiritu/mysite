// Create global variable 
var txt;
var imagePath;
var i = 0;
var speed = 75;
// Story 
function story() {
    var costumevar = document.getElementById('costume').value;
    var heroVar = document.getElementById('superhero').value;
    var food = document.getElementById('food').value;
    var treats = document.getElementById('treats').value;
    var sweets = document.getElementById('sweets').value;
    var place = document.getElementById('place').value;
    var action = document.getElementById('action').value;
    var bodypart = document.getElementById('bodypart').value;
    var liquid = document.getElementById('liquid').value;
    var place1 = document.getElementById('place1').value;
    var genderSelect = document.getElementById('gender').value;
    // change image background based on gender selection 
    if (genderSelect == "Man") {
        imagePath = "url(images/male-ghost.jpg)";
    } else if (genderSelect == "Woman") {
        imagePath = "url(images/female-ghost.jpg)";
    }
    // display image based on gender selection 
    document.getElementById("modalOutputContent").style.backgroundImage = imagePath;
    // text to display on the second modal
    txt = 'On Halloween night, I decided to dress up as '+costumevar+'. Our friends came over to celebrate. One of them is dressed as Superman and another one of them is dressed as '+heroVar+' We had some '+food+' to enjoy the night. We had some pumpkin carving contests and other parlor games. Kids also came to trick or treat. We filled their buckets with '+treats+' and '+sweets+'. After the party, me and my friends went out to the nearby park to play more games. The park was a little dark, full of tall, old trees and had an old park in it. While walking, we heard some creaking sound near the '+place+' like there was someone playing. When we checked, we saw an old '+genderSelect+' sitting on the bench in the playground. When one of my friends tried to approach the person, he suddenly '+action+'. She told us that the old '+genderSelect+' had no'+bodypart+' and was covered in '+liquid+'. Frightened, we ran away from the old '+genderSelect+'. We decided to go to the '+place1+' instead and spent the rest of the night there. After that night, we never talked about it again and decided not to go out on Halloween night and just stay in the '+place1+' and enjoy the evening.';
    // execute typewriter effect
    typeWriter();
}
    // typewriter function
    function typeWriter() {
    document.getElementById("modalOutputContent").style.backgroundImage = imagePath;
    if (i < txt.length) {
        document.getElementById("modalOutputtext").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
