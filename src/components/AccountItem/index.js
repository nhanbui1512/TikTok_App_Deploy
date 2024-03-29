import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import Image from '../Image';

import { useContext } from 'react';
import { ThemeContext } from '../../Context';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  const context = useContext(ThemeContext);

  return (
    <Link to={`/@${data.nickname}`} className={cx(['wrapper', context.theme])}>
      <Image src={data.avatar} alt={data.full_name} className={cx('avatar')}></Image>
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </h4>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccountItem;
