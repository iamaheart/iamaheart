import styles from "../styles/MainPage.module.css";
import PixelWriting from "../components/PixelWriting";
import Logo from "../components/Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Chord from "../components/Chord";
import PixelButton from "../components/PixelButton";

export default function MainPage() {
  const navigate = useNavigate();
  const [haederName, setHeaderName] = useState("header");
  const [content, setContent] = useState("main");
  const [isMemu, setIsMemu] = useState(false);
  const FONT_SIZE = 3;
  const HEADER_SIZE = 10;

  const toContent = (str: string):void => {
    setContent(str);
    setHeaderName(str);
    setIsMemu(false);
  };

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
            fontProps={{ size: HEADER_SIZE, color: 'black' }}
          />
        </div>
      </div>
      <div className={styles.mainPage}>
        {isMemu ? (
          <div className={styles.menuContainer}>
            <PixelButton onClock={()=>{toContent("chord")}} str={'chord'} size={FONT_SIZE} />
            <PixelButton onClock={()=>{toContent("chord")}} str={'qr cord'} size={FONT_SIZE} />
            <PixelButton onClock={()=>{toContent("chord")}} str={'aaa'} size={FONT_SIZE} />
          </div>
        ) : (
          <div className={styles.contentContainer}>
            {content === "main" ? (
              <div className={styles.menuContainer}>
                <div onClick={() => {}} style={{ cursor: "pointer" }}>
                  <PixelWriting
                    str={"Hello Main!"}
                    fontProps={{ size: FONT_SIZE }}
                  />
                </div>
              </div>
            ) : content === "chord" ? (
              <div className={styles.menuContainer}>
                <Chord />
              </div>
            ) : (
              <div className={styles.contentContainer}>
                <div onClick={() => {}} style={{ cursor: "pointer" }}>
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
