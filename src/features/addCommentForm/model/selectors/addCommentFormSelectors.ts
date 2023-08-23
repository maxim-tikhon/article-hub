import { State } from 'app/providers/StoreProvider';

export const getAddCommentFormText = (state: State) => state.addCommentForm?.text ?? '';
export const getAddCommentFormError = (state: State) => state.addCommentForm?.error;
