import classNames from 'classnames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ReducersList, useDynamicReducurLoad } from 'shared/lib/hooks/useDynamicReducerLoad';
import { HStack } from 'shared/ui/Stack';
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
    <HStack justify="between" max className={classNames(cls.addCommentForm, className)}>
      <Input
        className={cls.input}
        placeholder={t('Comment')}
        value={text}
        onChange={onCommentTextChange}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onSendHandler}
      >
        {t('Send')}
      </Button>
    </HStack>
  );
});

export default AddCommentForm;
