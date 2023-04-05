import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import styles from './DefaultLayot.module.scss';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    var viewport_width = document.documentElement.clientWidth;
    if (viewport_width < 500) {
        return <h1>Layout Mobile</h1>;
    } else {
        return (
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <div className={cx('sidebar_container')}>
                        <Sidebar />
                    </div>

                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        );
    }
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
