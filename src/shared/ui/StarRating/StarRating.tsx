import { memo, useState } from 'react';
import classNames from 'classnames';
import cls from './StarRating.module.scss';
import { Icon } from '@/shared/ui/Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const {
    className, size = 30, selectedStars = 0, onSelect,
  } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(0);
  // const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  // const onHover = (starsCount: number) => {
  //   if (!isSelected) {
  //     setCurrentStarsCount(starsCount);
  //   }
  // };

  // const onLeave = () => {
  //   if (!isSelected) {
  //     setCurrentStarsCount(0);
  //   }
  // };

  const onClick = (starsCount: number) => {
    if (currentStarsCount === 0) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      // setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.starRating, className, { [cls.filled]: currentStarsCount > 0 })}>
      {stars.map(starNumber => (
        <Icon
          className={classNames(
            cls.starIcon,
            { [cls.selected]: currentStarsCount >= starNumber },
            // { [cls.selected]: isSelected },
            // [currentStarsCount >= starNumber ? cls.hovered : cls.normal],
          )}
          Svg={StarIcon}
          key={starNumber}
          width={size}
          height={size}
          // onMouseLeave={onLeave}
          // onMouseEnter={() => onHover(starNumber)}
          onClick={() => onClick(starNumber)}
        />
      ))}
    </div>
  );
});
