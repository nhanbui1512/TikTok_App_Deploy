import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import MenuItem from './menuItem';

import {
  ShareEmbedIcon,
  SendIcon,
  FaceBookColor,
  WhatsAppColor,
  LinkColor,
  TwitterColor,
  LinkedInColor,
  RedditColor,
  TelegramColor,
  MailColor,
  LINEColor,
  PinterestColor,
} from '../Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from 'react';

import { ThemeContext } from '../../Context';

const cx = classNames.bind(styles);

function MenuShare({ children, className, offset = [-26, 8], placement = 'bottom-start' }) {
  const context = useContext(ThemeContext);

  const classes = cx(['wrapper', context.theme], {
    [className]: className,
  });

  const itemsMenu = [
    { title: 'Nhúng', icon: <ShareEmbedIcon /> },
    {
      title: 'Gửi đến bạn bè',
      icon: <SendIcon />,
    },
    { title: 'Share to Facebook', icon: <FaceBookColor /> },
    {
      title: 'Share to WhatsApp',
      icon: <WhatsAppColor />,
    },
    {
      title: 'Sao chép liên kết ',
      icon: <LinkColor />,
    },
    {
      title: 'Share to Twitter',
      icon: <TwitterColor />,
    },
    {
      title: 'Share to LinkedIn',
      icon: <LinkedInColor />,
    },
    {
      title: 'Share to Reddit',
      icon: <RedditColor />,
    },
    {
      title: 'Share to Telegram',
      icon: <TelegramColor />,
    },
    {
      title: 'Share to Mail',
      icon: <MailColor />,
    },
    {
      title: 'Share to Line',
      icon: <LINEColor />,
    },
    {
      title: 'Share to Pinterest',
      icon: <PinterestColor />,
    },
  ];

  const [listMenu, setListMenu] = useState(itemsMenu.slice(0, 5));

  const renderItem = (items) => {
    return (
      <>
        {items.map((item, index) => {
          return (
            <MenuItem key={index} icon={item.icon}>
              {item.title}
            </MenuItem>
          );
        })}
        {listMenu.length === itemsMenu.length || (
          <div
            onClick={(e) => {
              setListMenu(itemsMenu);
            }}
          >
            <span className={cx('drop-down-wrap')}>
              <FontAwesomeIcon className={cx('drop-down-icon')} icon={faChevronDown} />
            </span>
          </div>
        )}
      </>
    );
  };

  return (
    <HeadlessTippy
      offset={offset}
      interactive
      delay={[0, 200]}
      placement={placement}
      hideOnClick={false}
      popperOptions={{ modifiers: [{ name: 'flip', enabled: false }] }}
      render={(attrs) => (
        <div className={classes}>
          <div className={cx('list-item')}>{renderItem(listMenu)}</div>
        </div>
      )}
      zIndex={99}
      onHide={() => {
        setListMenu(itemsMenu.slice(0, 5));
      }}
    >
      {children}
    </HeadlessTippy>
  );
}

export default MenuShare;
