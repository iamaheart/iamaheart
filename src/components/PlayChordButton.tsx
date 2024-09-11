import {chordList, list, START_NOTE} from '../configs/chords';
import {FREQUENCIES} from '../configs/frequencies';
import PixelWriting from './PixelWriting';

interface PlayChordButtonProps {
    keyCode: number;
    chord: chordList;
    audioContext: AudioContext;
    text: string;
}

const PlayChordButton = ({keyCode, chord, audioContext, text}: PlayChordButtonProps) => {
    const FONT_SIZE = 10;

    const playNote = (frequency: any, startTime: number, duration: number) => {
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
    };

    const playChord = (chord: chordList) => {
        const duration = 0.4;
        const arr = list[chord];
        const arr2 = arr.map((note: any) => FREQUENCIES[note + START_NOTE + keyCode]);
        const notes = [{freq: arr2, time: 0, duration: duration * 2}];

        notes.forEach(note => {
            if (Array.isArray(note.freq)) {
                note.freq.forEach(f => playNote(f, note.time, note.duration));
            } else {
                playNote(note.freq, note.time, note.duration);
            }
        });
    };

    return (
        <div onClick={() => playChord(chord)} style={{cursor: 'pointer'}}>
            <PixelWriting str={text} fontProps={{size: FONT_SIZE}} />
        </div>
    );
};

export default PlayChordButton;
