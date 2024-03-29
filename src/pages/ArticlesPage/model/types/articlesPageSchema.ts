import { EntityState } from '@reduxjs/toolkit';

import {
  Article,
  ArticleSortFiels,
  ArticleType,
  ArticleView,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleView;
  page: number;
  limit: number;
  hasMore: boolean;
  type: ArticleType;

  order: SortOrder;
  sort: ArticleSortFiels;
  search: string;
  _inited: boolean;
}
