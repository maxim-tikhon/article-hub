import classNames from 'classnames';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';

const App = () => (
  <div className={classNames('app')}>
    <Suspense fallback="">
      <Navbar />
      <div className="page-content">
        <Sidebar />
        <AppRouter />
      </div>
    </Suspense>
  </div>
);

export default App;
