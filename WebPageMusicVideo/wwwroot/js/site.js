// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var id = null;

function myMove() {
    var elem = document.getElementById("myAnimation");
    var containerWidth = document.getElementById("myContainer").offsetWidth;  // Get container width
    var pos = 0;  // Start from the left at 0px
    elem.style.left = pos + 'px';  // Set initial position to the left

    clearInterval(id);
    id = setInterval(frame, 5);  // Set the interval for faster movement

    function frame() {
        if (pos >= containerWidth - elem.offsetWidth) {  // Stop when it reaches the right edge
            clearInterval(id);
        } else {
            pos += 3; 
            elem.style.left = pos + 'px';  // Update the position
        }
    }
}


