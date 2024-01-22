import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = memo((props) => {
  const { onSendComment, className } = props;
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, text, dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        data-testid="AddCommentForm"
        justify="between"
        max
        className={classNames(cls.AddCommentForm, {}, [className])}
      >
        <Input
          data-testid="AddCommentForm.Input"
          className={cls.input}
          value={text}
          onChange={onCommentTextChange}
          placeholder={t('Enter comment text')}
        />
        <Button
          data-testid="AddCommentForm.Button"
          onClick={onSendHandler}
        >
          {t('Send')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
