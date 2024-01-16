export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  ARTICLES = 'articles',
  ARTICEL_DETAILS = 'article_details',
  ARTICEL_CREATE = 'article_create',
  ARTICEL_EDIT = 'article_edit',
  PROFILE = 'profile',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICEL_DETAILS]: '/articles/', // + :id
  [AppRoutes.ARTICEL_CREATE]: '/articles/new',
  [AppRoutes.ARTICEL_EDIT]: '/articles/:id/edit',
  [AppRoutes.PROFILE]: '/profile/', // + :id
  [AppRoutes.ADMIN_PANEL]: '/admin/',
  [AppRoutes.FORBIDDEN]: '/forbidden',
  [AppRoutes.NOT_FOUND]: '*',
};
