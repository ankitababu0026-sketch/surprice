function moveButton() {
    const noBtn = document.getElementById('noBtn');
    
    // बटन को पूरी स्क्रीन पर कहीं भी रैंडमली भेजने के लिए
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}
