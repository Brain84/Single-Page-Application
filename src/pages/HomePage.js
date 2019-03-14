import React from 'react';
import '../styles/HomePage.scss';
import Header from '../layouts/Header';
import Navigation from '../layouts/Navigation';

const HomePage = () => {
  return (
    <section className="section__home">
      <Header />
      <Navigation />
    </section>
  );
}

export default HomePage;