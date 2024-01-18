import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '@/pages/ArticleDetailsPage/model/selectors/article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/route';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo(
  (props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
      navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
      if (article) {
        navigate(getRouteArticleEdit(article?.id));
      }
    }, [navigate, article?.id]);

    return (
      <HStack
        justify="between"
        max
        className={classNames('', {}, [className])}>
        <Button onClick={onBackToList}>{t('Back to list')}</Button>
        {canEdit && <Button onClick={onEditArticle}>{t('Edit')}</Button>}
      </HStack>
    );
  }
);
