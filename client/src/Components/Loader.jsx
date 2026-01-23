import React from 'react';

const Loader = ({ message = 'Loading awesome videos...' }) => {
  return (
    <div className="app-loader-overlay">
      <div className="loader-card glass-card p-8 rounded-2xl text-center">
        <div className="loader-logo mb-6" aria-hidden="true">
          <div className="ring ring-1" />
          <div className="ring ring-2" />
          <div className="ring ring-3" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-main">{message}</h2>
        <p className="text-muted mb-4">This won't take long — we are fetching the best picks for you.</p>
        <div className="loader-dots mt-2" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

export default Loader;
