import { Suspense, lazy } from 'react';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ArticleRatingProps } from './ArticleRating';

const ArticleRatingAsync = lazy(() => import('./ArticleRating'));

export const ArticleRatingLazy = (props: ArticleRatingProps) => (
  <Suspense fallback={<Skeleton width="100%" height={140} />}>
    <ArticleRatingAsync {...props} />
  </Suspense>
);
