import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage: FC<AdminPanelPageProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page
      data-testid="AdminPanelPage"
      className={classNames(cls.AdminPanelPage, {}, [className])}
    >
      Admin Page
    </Page>
  );
});

export default AdminPanelPage;
