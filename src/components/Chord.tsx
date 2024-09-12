import {useState} from 'react';
import PlayChordButton from './PlayChordButton';
import {chordList, noteList, scaleList} from '../configs/chords';
import PixelWriting from './PixelWriting';
import styles from '../styles/Chord.module.css';
import AudioContextProps from '../interfaces/AudioContextProps';

export default function Chord(props: AudioContextProps) {
    const [audioContext] = useState<AudioContext>(props.audioContext);
    const [selected, setSelected] = useState(0);

    const majorScaleList = [0, 2, 4, 5, 7, 9, 11];
    const majorScaleChirdList = [
        chordList.major,
        chordList.minor,
        chordList.minor,
        chordList.major,
        chordList.major,
        chordList.minor,
        chordList.dim,
    ];

    return (
        <div>
            <div className={styles.container}>
                <div>
                    <PixelWriting str={`KEY : ${noteList[selected]}`} fontProps={{size: 10}} />
                </div>
                <div className={styles.key}>
                    {noteList.map((element: string, index: number) => {
                        return (
                            <div
                                onClick={() => {
                                    setSelected(index);
                                }}
                                style={{cursor: 'pointer'}}
                                key={index}
                            >
                                <PixelWriting str={element} fontProps={{size: 10}} />
                            </div>
                        );
                    })}
                </div>
                <div className={styles.key}>
                    {scaleList.map((element: string, index: number) => {
                        return (
                            <PlayChordButton
                                text={element}
                                keyCode={selected + majorScaleList[index]}
                                chord={majorScaleChirdList[index]}
                                audioContext={audioContext}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
            )
        </div>
    );
}
