import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Section from '../components/Section';
import H1 from '../components/H1';
import H2 from '../components/H2';
import P from '../components/P';

const ComplimentsConcerns = () => (
  <div>
    <Nav />
    <Section className="lg:w-10/12 m-auto">
      <H1 id="compliments-and-concerns">Compliments and Concerns</H1>
      <P className="my-8">We always work hard to build strong and lasting relationships with our valued customers. By listening to your feedback, not only can we address any immediate concerns you may have we will also continually improve our products and services.</P>
      <P className="my-8">We know there are times when you may wish to compliment us on something we have done well and other times when you may wish to tell us we have not met your expectations.</P>
      <H2 id="compliments">Compliments</H2>
      <P className="my-8">Our representatives are always delighted to know that they have succeeded in making your experience a pleasant and successful one.</P>
      <P className="my-8">If one of our representatives has provided you with exceptional service in any way, please let us know using the details below, so that we can further encourage them via this feedback process.</P>
      <H2 id="concerns">Concerns</H2>
      <P className="my-8">If for any reason, you do not feel that you have received the highest standard of care from us, we encourage you to share this with us. We have developed a process that makes it easy for you to tell us about your concerns and for them to be addressed quickly and fairly.</P>
      <P className="my-8">If you choose to contact us by mail or email, please make sure you provide as much detail as possible about your complaint.</P>
      <H2 id="need-an-update-on-your-complaint">Need an Update on your Complaint</H2>
      <P className="my-8">If you have lodged a complaint with us, you can contact us at any time to ask for an update on its status. Contact us through any of the methods listed above and please be sure to refer to your earlier communication so that we can respond effectively.</P>
      <H2 id="resolution">Resolution</H2>
      <P className="my-8">We will try to deal with your complaint on the spot. However, if this is not possible, we will write to you to acknowledge your complaint within 5 days. We will ensure we treat you fairly and will work to resolve your complaint as soon as possible. In the rare event, we are still investigating your complaint after 45 days, we will write to you to explain why and to let you know when we expect to have completed our investigation.</P>
      <P className="my-8">When we have completed our investigation we will write to let you know the outcome and the reasons for our decision.</P>
      <H2 id="taking-it-further">Taking it Further</H2>
      <P className="my-8">We hope that you will be satisfied with how we deal with your complaint. However, if your concerns remain unresolved, or you have not heard from us within 45 days, then you can have your complaint heard by an independent party.</P>
      <P className="my-8">
        You can lodge your complaint with the
        <strong>Credit and Investments Ombudsman</strong>
        {' '}
        if lodged before 1st November 2018:
        <br />
        Online: www.cio.org.au
        <br />
        Email: info@cio.org.au
        <br />
        Phone: 1800 138 422 (free call)
        <br />
        Mail: Credit and Investments Ombudsman Reply Paid 252, South Sydney NSW 1234
      </P>
      <P className="my-8">
        or with the
        <strong>Australian Financial Complaints Authority</strong>
        {' '}
        if lodged on or after 1st November 2018:
        <br />
        Online: www.afca.org.au
        <br />
        Email: info@afca.org.au
        <br />
        Phone: 1800 931 678 (free call)
        <br />
        Mail: Australian Financial Complaints Authority GPO Box 3, Melbourne VIC 3001
      </P>
    </Section>
    <Footer />
  </div>
);

export default ComplimentsConcerns;
