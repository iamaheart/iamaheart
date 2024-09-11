import {PixelButtonProps} from '../interfaces/PixelButtonProps';
import styles from '../styles/PixelButton.module.css';
import PixelWriting from './PixelWriting';

export default function PixelButton(props: PixelButtonProps) {
    return (
        <div onClick={props.onClock} className={styles.menuButton}>
            <PixelWriting str={props.str} fontProps={{size: props.size}} />
        </div>
    );
}
