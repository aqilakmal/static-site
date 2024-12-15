document.addEventListener('DOMContentLoaded', () => {
    const mainText = document.getElementById('mainText');
    const originalText = mainText.textContent;
    
    // Clear and type out text when page loads
    mainText.textContent = '';
    typeText(originalText);

    // Add hover effect
    mainText.addEventListener('mouseover', () => {
        mainText.style.transform = 'scale(1.1)';
        mainText.style.textShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
    });

    mainText.addEventListener('mouseout', () => {
        mainText.style.transform = 'scale(1)';
        mainText.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
    });
});

function typeText(text) {
    const mainText = document.getElementById('mainText');
    let index = 0;
    
    function addChar() {
        if (index < text.length) {
            mainText.textContent += text.charAt(index);
            index++;
            setTimeout(addChar, 150);
        }
    }
    
    addChar();
} 