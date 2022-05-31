// CREATE AN ARRAY WITH ALL THE SOUNDS
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
// LOOP THROUGH THE SOUNDS SO WE THAT WE CREATE AN BUTTON ELEMENT AND ADD THE BTN CLASS AND INNER TEXT TO EACH ELEMENT
sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    // WITH .INNERTEXT WE SET THE NAMES OF THE BUTTONS FROM THE ARRAY
    btn.innerText = sound;
    // ADDED AN EVENT LISTENER THAT PLAYES THE SOUND AFTER CLICKING THE BUTTON
    btn.addEventListener('click', () => {
        stopSongs()
    // HTML5 HAS JAVASCRIPT API WITH THE METHOD PLAY => .play()
        document.getElementById(sound).play()
    })
    // APPEND THE CREATED ELEMENTS TO THE DIV (BUTTONS)
    document.getElementById('buttons').appendChild(btn)
});

// FUNCTION THAT STOPS AUDIO IF THE OTHER BUTTON IIS CLICKED

function stopSongs() {
    sounds.forEach( sound => {
        const song = document.getElementById(sound)
        // WE CAN USE PAUSE TO STOP THE AUDIO AND RESET IT WITH CURRENTTIME = 0
        song.pause()
        song.currentTime = 0;
    })
}