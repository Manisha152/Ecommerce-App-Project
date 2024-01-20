import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout title={"About us-Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          As a homegrown e-commerce organization we direct our effort toward building a sustainble business while creating inclusive and impactful
          growth for all our stakeholders.We believe in transformative innovation and risk taking.
          </p>
        </div>
      </div>
    </Layout>
  );
};

Layout.defaultProps={
  title:"Ecommerce app ",
  description:"mern stack project",
  keywords:"mern,react,node,mongodb",
  author:"Manisha",
};


export default About;