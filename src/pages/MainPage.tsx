import styles from '../styles/MainPage.module.css';
import PixelWriting from '../components/PixelWriting';
import Logo from '../components/Logo';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Chord from '../components/Chord';
import PixelButton from '../components/PixelButton';
import {MENU} from '../configs/configs';
import Words from '../components/Words';
import QrCode from '../components/QrCode';

export default function MainPage() {
    const navigate = useNavigate();
    const [haederName, setHeaderName] = useState('');
    const [content, setContent] = useState('');
    const [isMemu, setIsMemu] = useState(false);
    const FONT_SIZE = 3;
    const HEADER_SIZE = 10;

    const toContent = (str: string): void => {
        setContent(str);
        setHeaderName(str);
        setIsMemu(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div
                    onClick={() => {
                        setIsMemu(true);
                        setHeaderName('');
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
                        {content === MENU[1] ? (
                            <Chord />
                        ) : content === MENU[3] ? (
                            <QrCode />
                        ) : content === MENU[4] ? (
                            <Words />
                        ) : (
                            <div className={styles.contentContainer}>
                                <div>
                                    <PixelWriting
                                        str={'Hello World!'}
                                        fontProps={{size: FONT_SIZE}}
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
                    style={{cursor: 'pointer'}}
                >
                    <PixelWriting str={'github'} fontProps={{size: FONT_SIZE}} />
                </div>
            </div>
        </div>
    );
}
