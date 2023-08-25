import classNames from 'classnames/bind';
import styles from './home.module.scss';
import ListVideoBox from '../../components/ListVideoBox/listVideoBox';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={cx('container')}>
            <ListVideoBox />
        </div>
    );
}
export default Home;
