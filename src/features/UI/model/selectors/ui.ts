import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

export const getUIScroll = (state: StateSchema) => state.ui.scroll;
export const getUISCrollByPath = createSelector(
  getUIScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
