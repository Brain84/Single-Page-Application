import React from 'react';
import '../styles/ContactPage.scss';
import Footer from '../layouts/Footer';
import FormContact from '../components/FormContact';

const ContactPage = () => {
  return (
    <section className="section__contact">
      <FormContact />
      <Footer />
    </section>
  );
}

export default ContactPage;