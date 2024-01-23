import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { memo, useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation();

  const { isArticlesPageWasOpened } = useJsonSettings();

  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useAppDispatch();

  const onClose = () => setIsOpened(false);

  const text = (
    <Text
      title={t('Welcome to article page')}
      text={t('You can read and search any articles')}
    />
  );

  useEffect(() => {
    if (isArticlesPageWasOpened) {
      setIsOpened(true);
      dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
    }
  }, [dispatch, isArticlesPageWasOpened]);

  return (
    <>
      <BrowserView>
        <Modal isOpen={isOpened} onClose={onClose} lazy>
          {text}
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isOpened} onClose={onClose}>
          {text}
        </Drawer>
      </MobileView>
    </>
  );
});
