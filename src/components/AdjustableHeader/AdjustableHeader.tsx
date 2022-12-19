import cx from 'classnames';
import React, { FC, useState, useEffect } from 'react';

export interface AdjustableHeaderProps {
  logo?: JSX.Element;
  children: JSX.Element[] | JSX.Element;
  position?: number;
  preloadAnimation?: boolean;
}

export const AdjustableHeader: FC<AdjustableHeaderProps> = ({
  logo,
  position = 0,
  preloadAnimation = false,
  ...props
}) => {
  const { children } = props;
  const [showPreload, setShowPreload] = useState(preloadAnimation);
  const [scrollPosition, setScrollPosition] = useState(position);

  const getStyle = () => {
    if (showPreload) {
      if (scrollPosition === 0) {
        return {
          height: '120px',
          animation: 'blur-out 0.3s forwards',
        };
      }
      return {
        height: '60px',
        animation: 'blur-in 0.3s forwards',
      };
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setShowPreload(true);
      setScrollPosition(position);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cx('ui-header', { closed: scrollPosition !== 0 })}
      data-testid='header'
      style={getStyle()}
    >
      <div className='logo'>{logo}</div>
      {children}
    </header>
  );
};
