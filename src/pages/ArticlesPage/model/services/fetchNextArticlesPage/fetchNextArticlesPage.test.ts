import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import { testAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success', async () => {
    const thunk = new testAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        view: ArticleView.SMALL,
        ids: [],
        entities: {},
        isLoading: false,
        hasMore: true,
        _inited: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  });

  test('fetchArticlesList not called', async () => {
    const thunk = new testAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        view: ArticleView.SMALL,
        ids: [],
        entities: {},
        isLoading: false,
        hasMore: false,
        _inited: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
