import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';

interface SettingsPageProps {
  className?: string;
}

const SettingsPage: FC<SettingsPageProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation('settings');

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap="16">
        <Text title={t('User settings')} />
        <UiDesignSwitcher />
      </VStack>
    </Page>
  );
});

export default SettingsPage;
