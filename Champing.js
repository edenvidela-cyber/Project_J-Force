

// Simple animator for the H2 element with glow and color change effects
const h2 = document.querySelector('h2');

if (h2) {
    // Add CSS for glow effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glowAndColor {
            0% {
                color: #ff006e;
                text-shadow: 0 0 10px #ff006e, 0 0 20px #ff006e;
            }
            25% {
                color: #00d9ff;
                text-shadow: 0 0 10px #00d9ff, 0 0 20px #00d9ff;
            }
            50% {
                color: #ffbe0b;
                text-shadow: 0 0 10px #ffbe0b, 0 0 20px #ffbe0b;
            }
            75% {
                color: #8338ec;
                text-shadow: 0 0 10px #8338ec, 0 0 20px #8338ec;
            }
            100% {
                color: #ff006e;
                text-shadow: 0 0 10px #ff006e, 0 0 20px #ff006e;
            }
        }
        
        .glow-animate {
            animation: glowAndColor 4s infinite;
        }
    `;
    document.head.appendChild(style);
    
    // Apply animation to h2
    h2.classList.add('glow-animate');
}