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

    const types = <Text text={article.type.join(', ')} className={cls.types} />;

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
              <Avatar size={32} src={article.user.avatar} />
              <Text bold text={article.user.username} />
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
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <AppImage
              fallback={<Skeleton width={200} height={200} />}
              src={article.img}
              className={cls.img}
              alt={article.title}
            />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <div className={cls.infoWrapper}>
            {types}
            {views}
          </div>
          <Text text={article.title} className={cls.title} />
        </Card>
      </AppLink>
    );
  },
);
