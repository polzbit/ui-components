import cx from 'classnames';
import React, { FC, ReactNode, useRef, useEffect } from 'react';

export interface PopupProps {
  children: ReactNode;
  name?: string;
  open: boolean;
  direction: 'top' | 'right' | 'bottom' | 'left';
  anchorElement?: HTMLDivElement | null;
  handleClose: Function;
  arrow?: boolean;
}

export const Popup: FC<PopupProps> = ({
  name = 'popup',
  children,
  open,
  direction,
  anchorElement,
  arrow,
  handleClose,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (!anchorElement?.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('click', handleOutsideClick, false);
    return () => {
      document.removeEventListener('click', handleOutsideClick, false);
    };
  }, [handleClose]);

  const getStyle = () => {
    if (direction === 'top') {
      return {
        width: anchorElement?.offsetWidth,
        bottom: '100%',
        left: 0,
      };
    }
    if (direction === 'right') {
      return {
        width: anchorElement?.offsetWidth,
        top: '50%',
        left: '100%',
      };
    }
    if (direction === 'bottom') {
      return {
        width: anchorElement?.offsetWidth,
        top: '100%',
        left: 0,
      };
    }
    return {
      width: anchorElement?.offsetWidth,
      top: '50%',
      right: '100%',
    };
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className={cx(`ui-popup ${name} popup-${direction}`, { arrow })}
      data-testid={name}
      ref={ref}
      style={getStyle()}
    >
      {children}
    </div>
  );
};
