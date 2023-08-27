import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import { ReactNode } from 'react';
import classNames from 'classnames';
import { Button, ButtonTheme } from '../../../Button/Button';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    buttonTheme?: ButtonTheme;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
  const {
    className, trigger, direction = 'bottom right', children, buttonTheme = ButtonTheme.CLEAR,
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <HPopover
      className={classNames(cls.popover, className, popupCls.popup)}
    >
      <HPopover.Button as={Button} theme={buttonTheme} className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel
        className={classNames(cls.panel, menuClasses)}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
}
