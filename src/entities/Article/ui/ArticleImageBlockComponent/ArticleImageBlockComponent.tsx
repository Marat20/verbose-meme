import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
  TextAlign as TextAlignDeprecated,
  Text as TextDeprecated,
} from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { FC, memo } from 'react';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> =
  memo((props) => {
    const { className, block } = props;

    return (
      <div
        className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
      >
        <img src={block.src} alt={block.title} className={cls.img} />
        {block.title && (
          <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<Text text={block.title} align="center" />}
            off={
              <TextDeprecated
                text={block.title}
                align={TextAlignDeprecated.CENTER}
              />
            }
          />
        )}
      </div>
    );
  });
