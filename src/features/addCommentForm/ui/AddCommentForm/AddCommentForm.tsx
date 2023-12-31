import classNames from 'classnames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ReducersList, useDynamicReducurLoad } from '@/shared/lib/hooks/useDynamicReducerLoad';
import { HStack } from '@/shared/ui/Stack';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import {
  getAddCommentFormText,
  getAddCommentFormError,
} from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  useDynamicReducurLoad(reducers);

  const { className, onSendComment } = props;
  const { t } = useTranslation();

  const text = useSelector(getAddCommentFormText) || '';
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <HStack justify="between" max className={classNames(cls.addCommentForm, className)} data-testid="AddCommentForm">
      <Input
        className={cls.input}
        placeholder={t('Comment')}
        value={text}
        onChange={onCommentTextChange}
        data-testid="AddCommentForm.Input"
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onSendHandler}
        data-testid="AddCommentForm.Button"
      >
        {t('Send')}
      </Button>
    </HStack>
  );
});

export default AddCommentForm;
