import styles from '../styles/MainPage.module.css';
import PixelWriting from '../components/PixelWriting';
import Logo from '../components/Logo';
import {useState} from 'react';
import Chord from '../components/Chord';
import PixelButton from '../components/PixelButton';
import {MENU} from '../configs/configs';
import Words from '../components/Words';
import QrCode from '../components/QrCode';
import Piano from '../components/Piano';

export default function MainPage() {
    const [haederName, setHeaderName] = useState('');
    const [content, setContent] = useState('');
    const [isMemu, setIsMemu] = useState(false);
    const FONT_SIZE = 3;
    const HEADER_SIZE = 10;

    const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

    const handleInitializeAudioContext = () => {
        if (!audioContext) {
            const context = new window.AudioContext();
            setAudioContext(context);
            context.resume();
        }
    };

    const toContent = (str: string): void => {
        setContent(str);
        setHeaderName(str);
        setIsMemu(false);
    };

    const touchIcon = () => {
        setIsMemu(true);
        setHeaderName('');
        handleInitializeAudioContext();
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div
                    onClick={() => {
                        touchIcon();
                    }}
                    style={{cursor: 'pointer'}}
                >
                    <Logo multi={10} />
                </div>
                <div className={styles.headerText}>
                    <PixelWriting
                        str={haederName}
                        fontProps={{size: HEADER_SIZE, color: 'black'}}
                    />
                </div>
            </div>
            <div className={styles.mainPage}>
                {isMemu ? (
                    <div className={styles.menuContainer}>
                        {MENU.map((e, index) => {
                            return (
                                <PixelButton
                                    onClock={() => {
                                        toContent(e);
                                    }}
                                    str={e}
                                    size={FONT_SIZE + 3}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <div className={styles.contentContainer}>
                        {audioContext ? (
                            content === MENU[1] ? (
                                <Chord audioContext={audioContext} />
                            ) : content === MENU[2] ? (
                                <Piano audioContext={audioContext} />
                            ) : content === MENU[3] ? (
                                <QrCode />
                            ) : content === MENU[4] ? (
                                <Words />
                            ) : (
                                <div className={styles.contentContainer}></div>
                            )
                        ) : (
                            <div></div>
                        )}
                    </div>
                )}
            </div>
            <div className={styles.footer}>
                <div
                    onClick={() => {
                        setIsMemu(!isMemu);
                    }}
                    style={{cursor: 'pointer'}}
                >
                    <PixelWriting str={'github'} fontProps={{size: FONT_SIZE}} />
                </div>
            </div>
        </div>
    );
}
