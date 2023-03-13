import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SuggestedAccounts({ view = false, label, data = [] }) {
    const [isSeeAll, setIsSeeAll] = useState(view);

    const handleViewChange = () => {
        setIsSeeAll(!isSeeAll);
    };

    if (!isSeeAll) {
        data = data.slice(0, 5);
    }
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {data.map((item) => {
                return <AccountItem key={item.id} data={item}></AccountItem>;
            })}

            <p onClick={handleViewChange} className={cx('more-btn')}>
                {isSeeAll ? 'See less' : 'See all'}
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};

export default SuggestedAccounts;
