import React from 'react';
import AboutMeInfo from './information';

export default function AboutMePage() {
  return (
    <div className="about-page flex flex-col min-h-screen" style={{ height: '100vh', overflowY: 'scroll', paddingRight: '10px' }}>
      <main className="flex-grow">
        <AboutMeInfo/>
      </main>
    </div>
  );
}