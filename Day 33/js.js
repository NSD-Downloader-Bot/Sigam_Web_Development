// alert("NSD")

document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('text');
    const words = ['Free Fire videos', 'Articles', 'Gaming','Learn code','Only on NSD website','DOG IS A BEST POLICY'];
    let wordIndex = 0;
    let charIndex = 0;

    function type() {
        if (wordIndex === words.length) {
            wordIndex = 0;
        }

        const word = words[wordIndex];
        if (charIndex < word.length) {
            textElement.textContent += word.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Adjust typing speed (in milliseconds)
        } else {
            setTimeout(erase, 1000); // Display each word for 1 second
        }
    }

    function erase() {
        if (charIndex > 0) {
            textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50); // Adjust erasing speed (in milliseconds)
        } else {
            wordIndex++;
            setTimeout(type, 500); // Pause between words
        }
    }

    type(); // Start the typing effect
});


