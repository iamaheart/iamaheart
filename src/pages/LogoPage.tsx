import styles from '../styles/LogoPage.module.css';
import Logo from '../components/Logo';
import {useNavigate} from 'react-router-dom';

export default function LogoPage() {
    const navigate = useNavigate();
    return (
        <div className={styles.logoContainer}>
            <div
                className={styles.logo}
                onClick={() => {
                    navigate('/main');
                }}
                style={{cursor: 'pointer'}}
            >
                <Logo multi={8} />
            </div>
        </div>
    );
}
