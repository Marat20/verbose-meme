import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/route';
import { createSelector } from '@reduxjs/toolkit';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      text: 'Main',
      Icon: MainIcon,
    },

    {
      path: getRouteAbout(),
      text: 'About us',
      Icon: AboutIcon,
    },
  ];

  if (userData) {
    sidebarItemList.push(
      {
        path: getRouteProfile(userData.id),
        text: 'Profile',
        Icon: ProfileIcon,
        authOnly: true,
      },

      {
        path: getRouteArticles(),
        text: 'Articles',
        Icon: ArticleIcon,
        authOnly: true,
      },
    );
  }
  return sidebarItemList;
});
