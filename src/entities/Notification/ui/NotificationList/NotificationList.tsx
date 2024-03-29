import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeaturesFunc } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { useNotification } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string;
}

export const NotificationList: FC<NotificationListProps> = memo((props) => {
  const { className } = props;

  const { data, isLoading } = useNotification(null, {
    pollingInterval: 5000,
  });

  const Skeleton = toggleFeaturesFunc({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  if (isLoading) {
    return (
      <VStack
        gap="16"
        max
        className={classNames(cls.NotificationList, {}, [className])}
      >
        <Skeleton width="100%" height="80px" border="8px" />
        <Skeleton width="100%" height="80px" border="8px" />
        <Skeleton width="100%" height="80px" border="8px" />
      </VStack>
    );
  }

  return (
    <VStack
      gap="16"
      max
      className={classNames(cls.NotificationList, {}, [className])}
    >
      {data?.map((item) => <NotificationItem key={item.id} item={item} />)}
    </VStack>
  );
});
