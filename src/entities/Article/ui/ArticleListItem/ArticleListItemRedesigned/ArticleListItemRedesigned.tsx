import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails } from '@/shared/const/route';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts';
import { ArticleTextBlock } from '../../../model/types/article';
import { ArticleListItemProps } from '../ArticleListItem';
import cls from './ArticleListItemRedesigned.module.scss';

export const ArticleListItemRedesigned: FC<ArticleListItemProps> = memo(
  (props) => {
    const { article, view, className, target } = props;
    const { t } = useTranslation();

    const userInfo = (
      <>
        <Avatar size={32} src={article.user.avatar} className={cls.avatar} />
        <Text bold text={article.user.username} />
      </>
    );

    const views = (
      <HStack gap="8">
        <Text text={String(article.views)} className={cls.views} />
        <Icon Svg={EyeIcon} />
      </HStack>
    );

    if (view === ArticleView.BIG) {
      let textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT,
      ) as ArticleTextBlock;

      return (
        <Card
          padding="24"
          fullWidth
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <VStack gap="16" max>
            <HStack gap="8">
              {userInfo}
              <Text text={article.createdAt} />
            </HStack>
            <Text bold title={article.title} />
            <Text bold title={article.subtitle} size="size_s" />
            <AppImage
              fallback={<Skeleton width={'100%'} height={250} />}
              src={article.img}
              className={cls.img}
              alt={article.title}
            />
            {textBlock?.paragraphs && (
              <Text
                className={cls.textBlock}
                text={textBlock.paragraphs.slice(0, 2).join(' ')}
              />
            )}
            <HStack max justify="between">
              <AppLink target={target} to={getRouteArticleDetails(article.id)}>
                <Button>{t('Read more')}</Button>
              </AppLink>
              {views}
            </HStack>
          </VStack>
        </Card>
      );
    }

    return (
      <AppLink
        data-testid="ArticleListItem"
        target={target}
        to={getRouteArticleDetails(article.id)}
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card} border="round" padding="0">
          <AppImage
            fallback={<Skeleton width={'100%'} height={200} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          <VStack className={cls.info} gap="4">
            <Text text={article.title} className={cls.title} />
            <VStack gap="4" className={cls.footer} max>
              <HStack justify="between" max>
                <Text text={article.createdAt} className={cls.date} />
                {views}
              </HStack>
              <HStack gap="4">{userInfo}</HStack>
            </VStack>
          </VStack>
        </Card>
      </AppLink>
    );
  },
);
