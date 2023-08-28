import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import classNames from 'classnames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { useDevice } from '@/shared/lib/hooks/useDevice';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    onAccept,
    feedbackTitle,
    hasFeedback,
    onCancel,
    title,
    rate = 0,
  } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');
  const isMobile = useDevice();

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedback, onAccept]);

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <>
      <Text
        title={feedbackTitle}
      />
      <Input
        value={feedback}
        onChange={setFeedback}
        placeholder={t('Your review')}
        className={cls.review}
      />
    </>
  );

  return (
    <Card className={classNames(cls.ratingCard, className)}>
      <VStack align="center" gap="8" max>
        <Text title={starsCount ? t('Your rate') : title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
      </VStack>

      {
        isMobile
          ? (
            <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
              <VStack gap="32">
                {modalContent}
                <Button onClick={acceptHandle} size={ButtonSize.L} fullWidth>
                  {t('Send')}
                </Button>
              </VStack>
            </Drawer>
          )
          : (
            <Modal isOpen={isModalOpen} lazy>
              <VStack max gap="32">
                {modalContent}
                <HStack max gap="16" justify="end">
                  <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                    {t('Close')}
                  </Button>
                  <Button onClick={acceptHandle}>
                    {t('Send')}
                  </Button>
                </HStack>
              </VStack>
            </Modal>
          )
      }
    </Card>
  );
});
