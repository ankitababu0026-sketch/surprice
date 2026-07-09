function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = translate(${x}px, ${y}px);
}