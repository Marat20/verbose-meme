import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortFiels } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { getArticlesPageInited } from '../../selectors/ArticlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlePage/initArticlesPage', async (searchParams, thunkApi) => {
  const { getState, dispatch } = thunkApi;

  const inited = getArticlesPageInited(getState());

  if (!inited) {
    const orderFromUrl = searchParams.get('order') as SortOrder;
    const searchFromUrl = searchParams.get('search');
    const sortFromUrl = searchParams.get('sort') as ArticleSortFiels;

    if (orderFromUrl) {
      dispatch(articlesPageActions.setOrder(orderFromUrl));
    }
    if (searchFromUrl) {
      dispatch(articlesPageActions.setSearch(searchFromUrl));
    }
    if (sortFromUrl) {
      dispatch(articlesPageActions.setSort(sortFromUrl));
    }

    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({}));
  }
});
