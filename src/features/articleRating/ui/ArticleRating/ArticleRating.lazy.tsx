import { Skeleton } from '@/shared/ui/Skeleton';
import { Suspense, lazy } from 'react';
import { ArticleRatingProps } from './ArticleRating';

const ArticleRatingAsync = lazy(() => import('./ArticleRating'));

export const ArticleRatingLazy = (props: ArticleRatingProps) => {
  return (
    <Suspense
      fallback={
        <Skeleton
          width={'100%'}
          height={140}
        />
      }
    >
      <ArticleRatingAsync {...props} />
    </Suspense>
  );
};
