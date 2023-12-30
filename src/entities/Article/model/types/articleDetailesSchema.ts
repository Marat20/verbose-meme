import { Article } from './article';

export interface ArticleDetailesSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
}
