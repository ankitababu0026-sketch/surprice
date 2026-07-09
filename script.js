// वीडियो को ऑटो-प्ले करने की कोशिश
window.onload = function() {
    var video = document.getElementById("bg-video");
    if(video) {
        video.play().catch(function(error) {
            console.log("Autoplay blocked, user interaction required.");
        });
    }
};

// बटन हिलाने का फंक्शन
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const moveX = (Math.random() - 0.5) * 200;
    const moveY = (Math.random() - 0.5) * 200;
    
    let newLeft = noBtn.offsetLeft + moveX;
    let newTop = noBtn.offsetTop + moveY;
    
    newLeft = Math.max(20, Math.min(newLeft, window.innerWidth - 80));
    newTop = Math.max(20, Math.min(newTop, window.innerHeight - 50));
    
    noBtn.style.left = newLeft + 'px';
    noBtn.style.top = newTop + 'px';
}
