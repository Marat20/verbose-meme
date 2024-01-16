import StarIcon from '@/shared/assets/icons/star.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { FC, memo, useState } from 'react';
import { Icon } from '../Icon/Icon';
import cls from './StarRating.module.scss';

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = memo((props) => {
  const { className, onSelect, size = 30, selectedStars = 0 } = props;

  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  return (
    <div className={classNames(cls.StarRating, {}, [className])}>
      {stars.map((starNumber) => {
        return (
          <Icon
            className={classNames(
              cls.starIcon,
              { [cls.selected]: isSelected },
              [currentStarsCount >= starNumber ? cls.hovered : cls.normal]
            )}
            Svg={StarIcon}
            key={starNumber}
            width={size}
            height={size}
            onMouseLeave={onLeave}
            onMouseEnter={onHover(starNumber)}
            onClick={onClick(starNumber)}
          />
        );
      })}
    </div>
  );
});