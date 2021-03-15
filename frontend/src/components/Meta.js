import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'HomeFit',
  description: 'E-commerce website for sport tools , especially for whom want train at home',
  keywords: 'Web sites,sports,homefit,sports tools,tools , Home,Fitness',
};

export default Meta;
