import PixelWriting from './PixelWriting';
import {ALPHABAT, NUM, SPECIAL_WORDS} from '../configs/configs';

export default function Words() {
    const FONT_SIZE = 7;

    return (
        <div>
            <PixelWriting str={ALPHABAT} fontProps={{size: FONT_SIZE}} />
            <PixelWriting str={NUM} fontProps={{size: FONT_SIZE}} />
            <PixelWriting str={SPECIAL_WORDS} fontProps={{size: FONT_SIZE}} />
        </div>
    );
}
