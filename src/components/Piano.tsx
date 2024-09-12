import React, {useState, useEffect} from 'react';
import {FREQUENCIES} from '../configs/frequencies';
import {PIANO_KEY} from '../configs/pianoKey';
import PixelWriting from './PixelWriting';

const Piano: React.FC = () => {
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
    const FONT_SIZE = 5;

    useEffect(() => {
        // AudioContext 생성
        const context = new window.AudioContext();
        setAudioContext(context);
    }, []);

    // 주어진 주파수로 사인파 소리를 생성하는 함수
    const playNote = (frequency: number) => {
        if (!audioContext) return;

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 1);
        oscillator.stop(audioContext.currentTime + 1);
    };

    // 키보드 이벤트 핸들러
    const handleKeyPress = (event: KeyboardEvent) => {
        const keyIndex = PIANO_KEY.indexOf(event.key);
        if (keyIndex !== -1) {
            playNote(FREQUENCIES[keyIndex + 30]);
        }
    };

    useEffect(() => {
        // 키보드 이벤트 리스너 추가
        window.addEventListener('keypress', handleKeyPress);

        // 컴포넌트 언마운트 시 리스너 제거
        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, [audioContext]);

    return (
        <div>
            <PixelWriting str={'Press the keys: v, q, i as C'} fontProps={{size: FONT_SIZE}} />
        </div>
    );
};

export default Piano;
