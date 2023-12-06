import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export type SidebarItemType = {
  path: string;
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const SidebarItemList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Main page',
    Icon: MainIcon,
  },

  {
    path: RoutePath.about,
    text: 'About us',
    Icon: AboutIcon,
  },

  {
    path: RoutePath.profile,
    text: 'Profile page',
    Icon: ProfileIcon,
  },
];
