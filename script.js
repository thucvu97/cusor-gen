function setInitialAvatar() {
    const avatarImg = document.querySelector('.image-section img');
    // Check if we're in the hacks directory by looking at the current path
    const isInHacksDir = window.location.pathname.includes('/hacks/');
    const imagePath = isInHacksDir ? '../' : '';

    // Check if we're on the cursorai page
    const isCursorAIPage = window.location.pathname.includes('cursorai.html');

    // Check if we're on the Canva page
    const isCanvaPage = window.location.pathname.includes('canvapro.html');

    if (isCanvaPage) {
        avatarImg.src = `${imagePath}images/B66M0poh.png`;
    } else if (isCursorAIPage) {
        // Cursor AI page specific images
        if (window.innerWidth <= 768) {
            avatarImg.src = `${imagePath}images/YPD8ZbZ8.png`;
        } else {
            avatarImg.src = `${imagePath}images/90_4uoKp.jpg`;
        }
    } else {
        // Index page images
        if (window.innerWidth <= 768) {
            avatarImg.src = `${imagePath}images/E5K9Msjv.png`;
        } else {
            avatarImg.src = `${imagePath}images/E5K9Msjv.png`; // Using same image for both sizes on index
        }
    }
}

function setGeneratedAvatar() {
    const avatarImg = document.querySelector('.image-section img');
    // Check if we're in the hacks directory by looking at the current path
    const isInHacksDir = window.location.pathname.includes('/hacks/');
    const imagePath = isInHacksDir ? '../' : '';

    avatarImg.src = `${imagePath}images/90_4uoKp.jpg`;
}

document.addEventListener('DOMContentLoaded', function() {
    handleGenerate();
});

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function generateHexKey() {
    const hex = '0123456789abcdef';
    let key = '';
    for (let i = 0; i < 64; i++) {
        key += hex[Math.floor(Math.random() * 16)];
    }
    return key;
}

function handleGenerate() {

    // Check if we're on the Canva page

        // Existing Cursor AI key generation code
        const mercyHacksKey = generateUUID();
        document.getElementById('uuidKey').value = mercyHacksKey;
        document.querySelector('.text-section').classList.add('code-generated');
        // Rest of your existing code
        const codeBlock = document.querySelector('.code-block');
        const codeTemplate = `{
            "telemetry.machineId": "${mercyHacksKey}",
            "telemetry.macMachineId": "${mercyHacksKey}",
            "telemetry.devDeviceId": "${mercyHacksKey}",
            "telemetry.sqmId": "${mercyHacksKey}",
            "lastModified": "2024-01-01T00:00:00.000Z",
            "version": "1.0.1"
        }`;
        codeBlock.textContent = codeTemplate;

        // Update title

        // Hide generate button and subtitle
        document.getElementById('generateBtn').style.display = 'none';
        document.querySelector('.subtitle').style.display = 'none';

        // Hide the image section
        // Show both key container and instructions

        // Make sure the keys section is visible
        document.getElementById('keysSection').style.display = 'block';
}

function copyToClipboard(elementId) {
    // Open ad in new tab

    // Continue with copy functionality
    const element = document.getElementById(elementId);
    element.select();
    document.execCommand('copy');

    const button = element.nextElementSibling;
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    setTimeout(() => {
        button.textContent = originalText;
    }, 1000);
}


