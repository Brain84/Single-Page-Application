import React from 'react';
import '../styles/AboutPage.scss';
import img3 from '../images/img3.jpeg';

const ArticleAbout = () => {

  return (
    <section className="section__article">
      <article className="article__about">
        <h2 className="article__title">Our History</h2>
        <p className="article__history">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim aliquam nisl at consectetur. Aenean faucibus dictum est nec hendrerit. In aliquam sollicitudin sapien sed ullamcorper. Proin id placerat urna. Nulla facilisi. Duis hendrerit elit vitae tempor fringilla. Aenean molestie mauris vel fermentum placerat.</p>
        <p className="article__history">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim aliquam nisl at consectetur. Aenean faucibus dictum est nec hendrerit. In aliquam sollicitudin sapien sed ullamcorper. Proin id placerat urna. Nulla facilisi. Duis hendrerit elit vitae tempor fringilla. Aenean molestie mauris vel fermentum placerat. Donec dapibus eget arcu at placerat. Morbi sed lorem ornare, lobortis ex in, pulvinar magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse et turpis at purus pellentesque cursus.</p>
      </article>
      <img src={img3} alt="building" />
    </section>
  );
}

export default ArticleAbout;