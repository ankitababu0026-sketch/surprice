function showGift() {
    document.getElementById('giftPopup').style.display = 'flex';
    confetti(); 
}

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const newLeft = Math.random() * (window.innerWidth - 120);
    const newTop = Math.random() * (window.innerHeight - 60);
    noBtn.style.left = newLeft + 'px';
    noBtn.style.top = newTop + 'px';
}
