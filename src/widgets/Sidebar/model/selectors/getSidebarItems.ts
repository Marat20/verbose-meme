import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import AboutIconDeprecated from '@/shared/assets/icons/about-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import MainIcon from '@/shared/assets/icons/home.svg';
import MainIconDeprecated from '@/shared/assets/icons/main-20-20.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-20-20.svg';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/route';
import { toggleFeaturesFunc } from '@/shared/lib/features';

import { SidebarItemType } from '../types/sidebar';

export const useSidebarItems = () => {
  const userData = useSelector(getUserAuthData);
  const sidebarItemList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      text: 'Main',
      Icon: toggleFeaturesFunc({
        name: 'isAppRedesigned',
        on: () => MainIcon,
        off: () => MainIconDeprecated,
      }),
    },

    {
      path: getRouteAbout(),
      text: 'About us',
      Icon: toggleFeaturesFunc({
        name: 'isAppRedesigned',
        on: () => AboutIcon,
        off: () => AboutIconDeprecated,
      }),
    },
  ];

  if (userData) {
    sidebarItemList.push(
      {
        path: getRouteProfile(userData.id),
        text: 'Profile',
        Icon: toggleFeaturesFunc({
          name: 'isAppRedesigned',
          on: () => ProfileIcon,
          off: () => ProfileIconDeprecated,
        }),
        authOnly: true,
      },

      {
        path: getRouteArticles(),
        text: 'Articles',
        Icon: toggleFeaturesFunc({
          name: 'isAppRedesigned',
          on: () => ArticleIcon,
          off: () => AboutIconDeprecated,
        }),
        authOnly: true,
      },
    );
  }
  return sidebarItemList;
};
