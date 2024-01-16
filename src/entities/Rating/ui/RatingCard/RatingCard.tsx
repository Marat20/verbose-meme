import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Input } from '@/shared/ui/Input/Input';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Text } from '@/shared/ui/Text/Text';
import { FC, memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsNumber: number) => void;
  onAccept?: (starsNumber: number, feedback?: string) => void;
}

export const RatingCard: FC<RatingCardProps> = memo((props) => {
  const { className, title, feedbackTitle, hasFeedback, onCancel, onAccept } =
    props;
  const { t } = useTranslation('article');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept]
  );

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
      <Text title={feedbackTitle} />
      <Input
        value={feedback}
        onChange={setFeedback}
        placeholder={t('Your feedback')}
      />
    </>
  );

  return (
    <Card className={classNames('', {}, [className])}>
      <VStack align='center' gap='8'>
        <Text title={title} />
        <StarRating size={40} onSelect={onSelectStars} />
        <BrowserView>
          <Modal isOpen={isModalOpen} lazy>
            <VStack max gap='32'>
              {modalContent}
              <HStack gap='16' justify='end' max>
                <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                  {t('Close')}
                </Button>
                <Button onClick={acceptHandle}>{t('Send')}</Button>
              </HStack>
            </VStack>
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
            <VStack gap='32'>
              {modalContent}
              <Button fullWidth onClick={acceptHandle} size={ButtonSize.L}>
                {t('Send')}
              </Button>
            </VStack>
          </Drawer>
        </MobileView>
      </VStack>
    </Card>
  );
});
