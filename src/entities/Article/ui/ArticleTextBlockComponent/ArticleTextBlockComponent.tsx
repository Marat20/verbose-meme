import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> =
  memo((props) => {
    const { className, block } = props;

    return (
      <div
        className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
      >
        {block.title && (
          <ToggleFeatures
            feature="isAppRedesigned"
            on={<Text title={block.title} className={cls.title} />}
            off={<TextDeprecated title={block.title} className={cls.title} />}
          />
        )}
        {block.paragraphs.map((paragraph) => (
          <ToggleFeatures
            feature="isAppRedesigned"
            on={
              <Text
                text={paragraph}
                key={paragraph}
                className={cls.paragraph}
              />
            }
            off={
              <TextDeprecated
                text={paragraph}
                key={paragraph}
                className={cls.paragraph}
              />
            }
          />
        ))}
      </div>
    );
  });
