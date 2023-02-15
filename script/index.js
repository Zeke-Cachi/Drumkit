const snare = document.getElementById('snare');
const kick = document.getElementById('kick');
const hiHat = document.getElementById('hiHat');
const tom1 = document.getElementById('tom1');
const tom2 = document.getElementById('tom2');
const crash = document.getElementById('crash');

const snareButton = document.getElementById('snareButton');
const kickButton = document.getElementById('kickButton');
const hihatButton = document.getElementById('hihatButton');
const tom1Button = document.getElementById('tom1Button');
const tom2Button = document.getElementById('tom2Button');
const crashButton = document.getElementById('crashButton');

const allButtons = document.querySelectorAll('button');

allButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonId = e.target.id;
        if (buttonId == 'snareButton') {
            snare.play();
            snare.currentTime = 0;
        } else if (buttonId == 'kickButton') {
            kick.play();
            kick.currentTime = 0;
        } else if (buttonId == 'tom1Button') {
            tom1.play();
            tom1.currentTime = 0;
        } else if (buttonId == 'tom2Button') {
            tom2.play();
            tom2.currentTime = 0;
        } else if (buttonId == 'hihatButton') {
            hiHat.play();
            hiHat.currentTime = 0;
        } else if (buttonId == 'crashButton') {
            crash.play();
            crash.currentTime = 0;
        }
    });
});




window.addEventListener('keydown',(e) => {
    switch (e.code) {
        case 'KeyA':
            snareButton.classList.add('when-pressed');
            window.addEventListener('keyup',() => {
                snareButton.classList.remove('when-pressed');
            })
            snare.play();
            snare.currentTime = 0;
            break;
    
        case 'KeyF':
            kickButton.classList.add('when-pressed');
            window.addEventListener('keyup',() => {
                kickButton.classList.remove('when-pressed');
            })
            kick.play();
            kick.currentTime = 0;
            break;

        case 'KeyW':
            tom1Button.classList.add('when-pressed');
            window.addEventListener('keyup',() => {
                tom1Button.classList.remove('when-pressed');
            })
            tom1.play();
            tom1.currentTime = 0;
            break;

        case 'KeyE':
            tom2Button.classList.add('when-pressed');
            window.addEventListener('keyup',() => {
                tom2Button.classList.remove('when-pressed');
            })
            tom2.play();
            tom2.currentTime = 0;
            break;

        case 'KeyS':
            hihatButton.classList.add('when-pressed');
            window.addEventListener('keyup',() => {
                hihatButton.classList.remove('when-pressed');
            })
            hiHat.play();
            hiHat.currentTime = 0;
            break;

        case 'KeyD':
            crashButton.classList.add('when-pressed');
            window.addEventListener('keyup',() => {
                crashButton.classList.remove('when-pressed');
            })
            crash.play();
            crash.currentTime = 0;
            break;

        default:
            break;
    }
})



