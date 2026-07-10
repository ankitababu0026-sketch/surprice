function showGift() {
    document.getElementById('giftPopup').style.display = 'flex';
    confetti(); 
}
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    noBtn.style.left = (Math.random() * (window.innerWidth - 120)) + 'px';
    noBtn.style.top = (Math.random() * (window.innerHeight - 80)) + 'px';
}
