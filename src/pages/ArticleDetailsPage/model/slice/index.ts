import { combineReducers } from '@reduxjs/toolkit';

import { ArticleDetailsPageSchema } from '../types';
import { ArticleDetailsCommentsReducer } from './ArticleDetailsCommentsSlice';
import { ArticleDetailsPageRecommendationsReducer } from './ArticleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    recommendations: ArticleDetailsPageRecommendationsReducer,
    comments: ArticleDetailsCommentsReducer,
  });
