import CircleUpIcon from '@/shared/assets/icons/circle-up.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { FC, memo } from 'react';

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton: FC<ScrollToTopButtonProps> = memo((props) => {
  const { className } = props;

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Icon
      Svg={CircleUpIcon}
      clickable
      onClick={onClick}
      width={32}
      height={32}
      className={className}
    />
  );
});
