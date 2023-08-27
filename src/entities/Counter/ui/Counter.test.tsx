import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import { componentRender } from '@/shared/lib/tests/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  let user: UserEvent;

  beforeAll(() => {
    user = userEvent.setup();
  });

  test('test render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    await user.click(screen.getByTestId('increment-btn'));

    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

    await user.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
