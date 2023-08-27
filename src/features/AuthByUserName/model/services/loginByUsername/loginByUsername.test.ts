import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/testAyncThunk';
import { loginByUsername } from './loginByUsername';

// jest.mock('axios');

// const axiosMock = jest.mocked(axios);

describe('loginByUsername', () => {
  // let dispatch: Dispatch;
  // let getState: () => State;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  // test('success login', async () => {
  //   const userValue = { username: '123', id: '1' };
  //   axiosMock.post.mockReturnValue(Promise.resolve({ data: userValue }));
  //   const actionCreator = loginByUsername({ username: '123', password: '123' });
  //   const action = await actionCreator(dispatch, getState, undefined);

  //   expect(axiosMock.post).toHaveBeenCalled();
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(action.meta.requestStatus).toBe('fulfilled');
  //   expect(action.payload).toEqual(userValue);
  // });

  // test('error login', async () => {
  //   axiosMock.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //   const action = loginByUsername({ username: '123', password: '123' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(axiosMock.post).toHaveBeenCalled();
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toBe('error');
  // });

  test('success login', async () => {
    const userValue = { username: '123', id: '1' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
