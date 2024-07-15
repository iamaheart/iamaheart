import styles from "../styles/MainPage.module.css";
import PixelWriting from "../components/PixelWriting";
import Logo from "../components/Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  const [haederName, setHeaderName] = useState("header");
  const [isMemu, setIsMemu] = useState(false);

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
        <div className={styles.pixelWriting}>
          <PixelWriting
            str={haederName}
            fontProps={{ size: 10, color: "#f0fff0" }}
          />
        </div>
      </div>
      <div className={styles.mainPage}>
        {isMemu ? (
          <div className={styles.menuContainer}>
            <PixelWriting str={"Hello World!"} fontProps={{ size: 4 }} />
          </div>
        ) : (
          <div className={styles.contentContainer}>
            <PixelWriting str={"My name is you."} fontProps={{ size: 4 }} />
          </div>
        )}
      </div>
      <div className={styles.footer}>
        <PixelWriting str={"Bye World!"} fontProps={{ size: 4 }} />
      </div>
    </div>
  );
}
