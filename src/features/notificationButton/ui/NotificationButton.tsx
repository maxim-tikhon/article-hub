import { memo, useCallback, useState } from 'react';
import classNames from 'classnames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { Popover } from '@/shared/ui/Popups';
import { NotificationList } from '@/entities/Notification';
import { useDevice } from '@/shared/lib/hooks/useDevice';
import { Drawer } from '@/shared/ui/Drawer';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;

  const isMobele = useDevice();
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  return (
    <div>
      { isMobele
        ? (
          <>
            { trigger }
            <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
              <NotificationList />
            </Drawer>
          </>
        )
        : (
          <Popover
            className={classNames(cls.notificationButton, {}, [className])}
            direction="bottom left"
            trigger={trigger}
          >
            <NotificationList className={cls.notifications} />
          </Popover>
        )}
    </div>
  );
});
