import { StoryFn } from '@storybook/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

export const RouterDecorator = (Story: StoryFn) => (
  <MemoryRouter initialEntries={["/path/1"]}>
    <Routes>
      <Route path="/path/:id" element={<Story />}>
      </Route>
    </Routes>
  </MemoryRouter>
);
