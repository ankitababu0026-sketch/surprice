function createBalloons() {
    const container = document.getElementById('balloons-container');
    for(let i=0; i<10; i++) {
        let b = document.createElement('div');
        b.className = 'balloon';
        b.innerHTML = i % 2 == 0 ? '🎈' : '❤️';
        b.style.left = Math.random() * 100 + '%';
        b.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(b);
    }
}
createBalloons();
function showGift() {
    document.getElementById('giftPopup').style.display = 'flex';
    confetti();
}
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    noBtn.style.top = Math.random() * (window.innerHeight - 50) + 'px';
}
