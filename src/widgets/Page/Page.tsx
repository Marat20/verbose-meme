import { StateSchema } from 'app/providers/StoreProvider';
import { getUISCrollByPath, uiActions } from 'features/UI';
import { FC, MutableRefObject, ReactNode, UIEvent, memo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScollEnd?: () => void;
}

export const Page: FC<PageProps> = memo((props) => {
  const { children, className, onScollEnd } = props;

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) =>
    getUISCrollByPath(state, pathname)
  );

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      uiActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      })
    );
  }, 500);

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScollEnd,
  });

  return (
    <section
      onScroll={onScroll}
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}>
      {children}
      {onScollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </section>
  );
});
