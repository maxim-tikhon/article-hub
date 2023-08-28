import '../../src/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { Preview } from '@storybook/react';
import { Theme } from '@/shared/const/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
