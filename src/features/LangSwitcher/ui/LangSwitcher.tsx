import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
  Button as ButtonDeprecated,
  ButtonTheme as ButtonThemeDeprecated,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(
  ({ className, short }) => {
    const { i18n, t } = useTranslation();

    const toggle = () => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Button
            variant="clear"
            onClick={toggle}
            className={classNames('', {}, [className])}
          >
            {t(short ? 'Short translate' : 'Translate')}
          </Button>
        }
        off={
          <ButtonDeprecated
            theme={ButtonThemeDeprecated.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggle}
          >
            {t(short ? 'Short translate' : 'Translate')}
          </ButtonDeprecated>
        }
      />
    );
  },
);
