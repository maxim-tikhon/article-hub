import classNames from 'classnames';
import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    readOnly,
    ...otherProps
  } = props;

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.inputWrapper, className, { [cls.readonly]: readOnly })}>
      <input
        className={cls.input}
        type={type}
        value={value}
        readOnly={readOnly}
        onChange={changeValue}
        {...otherProps}
      />
    </div>
  );
});
