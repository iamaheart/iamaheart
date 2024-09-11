import {chordList, list, START_NOTE} from '../configs/chords';
import {FREQUENCIES} from '../configs/frequencies';

const audioContext = new window.AudioContext();

function playNote(frequency: number, startTime: number, duration: number) {
    const oscillator = audioContext.createOscillator();

    oscillator.type = 'triangle';
    oscillator.frequency.value = frequency;

    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.1, audioContext.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start(audioContext.currentTime + startTime);
    oscillator.stop(audioContext.currentTime + startTime + duration);
}

export default function playChord(chord: chordList) {
    const duration = 0.4;
    const arr = list[chord];
    console.log(arr);
    const arr2 = arr.map(note => FREQUENCIES[note + START_NOTE]);
    console.log(arr2);
    const notes = [{freq: arr2, time: 0, duration: duration * 2}];

    // const notes = [
    //   { freq: 261.63, time: 0, duration }, // C4
    //   { freq: 329.63, time: 0.5, duration }, // E4
    //   { freq: 392.0, time: 1, duration }, // G4
    //   { freq: 523.25, time: 1.5, duration }, // C5
    //   { freq: [261.63, 329.63, 392.0], time: 2, duration: duration * 2 }, // C Major Chord
    //   { freq: 392.0, time: 3, duration }, // G4
    //   { freq: 329.63, time: 3.5, duration }, // E4
    // ];

    notes.forEach(note => {
        if (Array.isArray(note.freq)) {
            note.freq.forEach(f => playNote(f, note.time, note.duration));
        } else {
            playNote(note.freq, note.time, note.duration);
        }
    });
}
