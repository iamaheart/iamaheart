import styles from "../styles/MainPage.module.css";
import PixelWriting from "../components/PixelWriting";
import Logo from "../components/Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { list, START_NOTE } from "../configs/chords";
import { FREQUENCIES } from "../configs/frequencies";

export default function MainPage() {
  const navigate = useNavigate();
  const [haederName, setHeaderName] = useState("header");
  const [content, setContent] = useState("main");
  const [isMemu, setIsMemu] = useState(false);
  const FONT_SIZE = 3;
  const HEADER_SIZE = 10;
  const duration = 0.4;

  const audioContext = new window.AudioContext();

  function playNote(frequency: number, startTime: number, duration: number) {
    const oscillator = audioContext.createOscillator();

    oscillator.type = "triangle";
    oscillator.frequency.value = frequency;

    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.1,
      audioContext.currentTime + duration
    );

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start(audioContext.currentTime + startTime);
    oscillator.stop(audioContext.currentTime + startTime + duration);
  }

  function playMusic() {
    const arr = list[0];
    console.log(arr);
    const arr2 = arr.map((note) => FREQUENCIES[note + START_NOTE]);
    console.log(arr2);
    const notes = [{ freq: arr2, time: 0, duration: duration * 2 }];

    // const notes = [
    //   { freq: 261.63, time: 0, duration }, // C4
    //   { freq: 329.63, time: 0.5, duration }, // E4
    //   { freq: 392.0, time: 1, duration }, // G4
    //   { freq: 523.25, time: 1.5, duration }, // C5
    //   { freq: [261.63, 329.63, 392.0], time: 2, duration: duration * 2 }, // C Major Chord
    //   { freq: 392.0, time: 3, duration }, // G4
    //   { freq: 329.63, time: 3.5, duration }, // E4
    // ];

    notes.forEach((note) => {
      if (Array.isArray(note.freq)) {
        note.freq.forEach((f) => playNote(f, note.time, note.duration));
      } else {
        playNote(note.freq, note.time, note.duration);
      }
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div
          onClick={() => {
            setIsMemu(!isMemu);
          }}
          style={{ cursor: "pointer" }}
        >
          <Logo multi={10} />
        </div>
        <div className={styles.headerText}>
          <PixelWriting
            str={haederName}
            fontProps={{ size: HEADER_SIZE, color: "#f0fff0" }}
          />
        </div>
      </div>
      <div className={styles.mainPage}>
        {isMemu ? (
          <div className={styles.menuContainer}>
            <PixelWriting
              str={"Hello World!"}
              fontProps={{ size: FONT_SIZE }}
            />
          </div>
        ) : (
          <div className={styles.contentContainer}>
            {content === "main" ? (
              <div className={styles.menuContainer}>
                <div
                  onClick={() => {
                    playMusic();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <PixelWriting
                    str={"Hello Main!"}
                    fontProps={{ size: FONT_SIZE }}
                  />
                </div>
              </div>
            ) : (
              <div className={styles.contentContainer}>
                <div
                  onClick={() => {
                    playMusic();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <PixelWriting
                    str={"Hello World!"}
                    fontProps={{ size: FONT_SIZE }}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className={styles.footer}>
        <div
          onClick={() => {
            setIsMemu(!isMemu);
          }}
          style={{ cursor: "pointer" }}
        >
          <PixelWriting str={"github"} fontProps={{ size: FONT_SIZE }} />
        </div>
      </div>
    </div>
  );
}
