import { X } from 'phosphor-react';
import React, { FC, ReactNode } from 'react';
import { Button } from '../Button';

export interface DialogProps {
  title?: string;
  children: ReactNode;
  name?: string;
  open: boolean;
  handleClose?: () => void;
}

export const Dialog: FC<DialogProps> = ({
  name = 'dialog',
  children,
  title,
  open,
  handleClose,
}) => {
  if (!open) {
    return null;
  }
  return (
    <div className={`ui-dialog ${name}`} data-testid={name}>
      <div className='app-mask' onClick={handleClose}></div>
      <div className='dialog-content' role='dialog'>
        <div className='top-row'>
          <span>{title}</span>
          {handleClose && (
            <Button
              variant='text'
              name='dialog-close-button'
              onClick={handleClose}
            >
              <X size={20} />
            </Button>
          )}
        </div>

        {children}
      </div>
    </div>
  );
};
