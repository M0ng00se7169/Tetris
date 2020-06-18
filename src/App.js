import React, { lazy, Suspense } from "react";
const Tetris = lazy(() => import("./components/Tetris"));

const renderLoading = () => <div className="loader"></div>;

const App = () => {
  

  return (
    <div className="App">
      <Suspense fallback={renderLoading()}>
        <Tetris />
      </Suspense>
    </div>
  );
};

export default App;
