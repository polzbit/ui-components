import cx from 'classnames';
import { CaretDown, CaretUp } from 'phosphor-react';
import React, { FC, useState, useRef, useEffect } from 'react';
import { Button } from '../Button';
import { Popup } from '../Popup';

export interface SelectProps {
  name?: string;
  open?: boolean;
  placeholder?: string;
  selected: string;
  list: string[];
  onSelect: Function;
}

export const Select: FC<SelectProps> = ({
  name = 'select',
  open = false,
  selected,
  placeholder,
  list,
  onSelect,
}) => {
  const [popupOpen, setPopupOpen] = useState(open);

  useEffect(() => {
    setPopupOpen(open);
  }, [open]);

  const ref = useRef<HTMLDivElement>(null);
  const handleClose = () => {
    setPopupOpen(false);
  };
  const handleSelect = (item: string) => {
    onSelect(item);
    handleClose();
  };

  return (
    <div
      className={cx(`ui-select ${name}`, { 'select-opened': popupOpen })}
      data-testid={name}
      ref={ref}
    >
      <Button variant='outline' onClick={() => setPopupOpen(true)}>
        <span className='select-value'>
          {!!selected ? selected : placeholder}
        </span>
        {popupOpen ? (
          <CaretUp
            size={18}
            style={{ pointerEvents: 'none', marginLeft: 'auto' }}
          />
        ) : (
          <CaretDown
            size={18}
            style={{ pointerEvents: 'none', marginLeft: 'auto' }}
          />
        )}
      </Button>
      <Popup
        direction='bottom'
        handleClose={handleClose}
        open={popupOpen}
        anchorElement={ref.current}
      >
        <ul className='select-items'>
          {list.map((item) => (
            <li
              className={cx('select-item', {
                'active-item': selected === item,
              })}
              key={item}
            >
              <button
                type='button'
                data-testid='select-item'
                onClick={() => handleSelect(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </Popup>
    </div>
  );
};
