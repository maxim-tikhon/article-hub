import classNames from 'classnames';
import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className, value, onChange, type = 'text', ...otherProps
  } = props;

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.inputWrapper, className)}>
      <input
        className={cls.input}
        type={type}
        value={value}
        onChange={changeValue}
        {...otherProps}
      />
    </div>
  );
});
