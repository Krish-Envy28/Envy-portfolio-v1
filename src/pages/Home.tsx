import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About section matching reference layout */}
      <About />

      {/* Selected Work Showcase */}
      <Work />
    </>
  );
}
