import { useState } from "react";
import PlayChordButton from "./PlayChordButton";
import { chordList, noteList, scaleList } from "../configs/chords";
import PixelWriting from "./PixelWriting";
import styles from "../styles/Chord.module.css";

export default function Chord() {
  const FONT_SIZE = 3;
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [selected, setSelected] = useState(0);

  const handleInitializeAudioContext = () => {
    if (!audioContext) {
      const context = new window.AudioContext();
      setAudioContext(context);
      context.resume();
    }
  };

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
      {audioContext ? (
        <div className={styles.container}>
          <div>
            <PixelWriting
              str={`KEY : ${noteList[selected]}`}
              fontProps={{ size: 10 }}
            />
          </div>
          <div className={styles.key}>
            {noteList.map((element: string, index: number) => {
              return (
                <div
                  onClick={() => {
                    setSelected(index);
                  }}
                  style={{ cursor: "pointer" }}
                  key={index}
                >
                  <PixelWriting str={element} fontProps={{ size: 10 }} />
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
      ) : (
        <div
          onClick={handleInitializeAudioContext}
          style={{ cursor: "pointer" }}
          className={styles.start}
        >
          <PixelWriting str={"Start"} fontProps={{ size: FONT_SIZE }} />
        </div>
      )}
    </div>
  );
}
