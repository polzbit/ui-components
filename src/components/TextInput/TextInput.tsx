import cx from 'classnames';
import React, { FC } from 'react';

export interface TextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name?: string;
  error?: string;
}

export const TextInput: FC<TextInputProps> = ({
  name = 'textInput',
  error,
  ...props
}) => {
  return (
    <div
      className={cx(`ui-text-input ${name}`, { 'input-error': !!error })}
      data-testid={name}
    >
      <input type='text' {...props} />
      <span
        data-testid='error-message'
        className='error-text'
        style={{ opacity: !!error ? 1 : 0 }}
      >
        {error}
      </span>
    </div>
  );
};
