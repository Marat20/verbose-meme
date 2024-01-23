import { getUserAuthData } from '@/entities/User';
import { getFeatureFlags, updateFeatureFlags } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

interface UiDesignSwitcherProps {
  className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation('settings');

  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const forceUpdate = useForceUpdate();

  const userData = useSelector(getUserAuthData);

  const isAppRedesigned = getFeatureFlags('isAppRedesigned');

  const items = [
    {
      content: t('New'),
      value: 'new',
    },
    {
      content: t('Old'),
      value: 'old',
    },
  ];

  const onChange = async (value: string) => {
    if (userData?.id) {
      setIsLoading(true);
      await dispatch(
        updateFeatureFlags({
          userId: userData?.id,
          newFeatures: {
            isAppRedesigned: value === 'new' ? true : false,
          },
        }),
      ).unwrap();
      setIsLoading(false);
      forceUpdate();
    }
  };

  return (
    <HStack>
      <Text title={t('Interface options')} />
      {isLoading ? (
        <Skeleton width={100} height={40} />
      ) : (
        <ListBox
          onChange={onChange}
          items={items}
          value={isAppRedesigned ? 'new' : 'old'}
          className={className}
        />
      )}
    </HStack>
  );
});
