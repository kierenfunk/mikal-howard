import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Section from '../components/Section';
import H1 from '../components/H1';
import H2 from '../components/H2';
import P from '../components/P';

const PrivacyPolicy = () => (
  <div>
    <Nav />
    <Section className="lg:w-10/12 m-auto">
      <H1 id="privacy-policy">Privacy Policy</H1>
      <P className="my-8">At Mikal Howard Finance, we are committed to protecting your privacy in accordance with the Privacy Act 1988 (Cth). This Privacy Policy describes our current policies and practices in relation to the handling and use of personal information.</P>
      <H2 id="what-information-do-we-collect-and-how-do-we-use-it">What information do we collect and how do we use it?</H2>
      <P className="my-8">We will ask you for personal information when we assist you with your finance. We use the information you provide to advise about and assist with your credit needs. We only provide your information to the companies with whom you choose to deal (and their representatives).</P>
      <P className="my-8">We also use your information to send you requested product information and to enable us to manage your ongoing relationship with us e.g. invoicing, client surveys etc. We may do so by mail or electronically unless you tell us that you do not wish to receive electronic communications.</P>
      <P className="my-8">We may occasionally notify you about promotions, new services and special offers, events or articles we think will be of interest to you. We may send you regular updates by email or by post. If you would rather not receive this information, email or write to us.</P>
      <P className="my-8">We may also use your information internally to help us improve our services and help resolve any problems.</P>
      <H2 id="what-if-you-dont-provide-some-information-to-us">What if you don’t provide some information to us?</H2>
      <P className="my-8">If you don’t provide us with full information, we can’t properly advise or assist you with your credit needs.</P>
      <H2 id="how-do-we-hold-and-protect-your-information">How do we hold and protect your information?</H2>
      <P className="my-8">We strive to maintain the reliability, accuracy, completeness, and currency of the personal information we hold and to protect its privacy and security. We keep personal information only for as long as is reasonably necessary for the purpose for which it was collected or to comply with any applicable legal or ethical reporting or document retention requirements.</P>
      <P className="my-8">We hold the information we collect from you in our secure cloud server, Dropbox. It is also backed-up off-site for extra security. As credit representatives of Connective Credit Services Pty Ltd, we have access to an industry based software that also has a secure server where your information is stored.</P>
      <P className="my-8">We ensure that your information is safe by using a secure shredding service for hard copy items or returning to you at your request. All items are managed in Dropbox constantly and can be accessed quickly and easily if you require anything.</P>
      <H2 id="will-we-disclose-the-information-we-collect-to-anyone">Will we disclose the information we collect to anyone?</H2>
      <P className="my-8">We do not sell, trade, or rent your personal information to others.</P>
      <P className="my-8">We may need to provide your information to our credit licensee e.g. for administration and supervision activities, contractors who supply services to us e.g. to handle mailings on our behalf, or to other companies in the event of a corporate sale, merger, re-organisation, dissolution or similar event. However, we will do our best to ensure that they protect your information in the same way that we do.</P>
      <P className="my-8">We may also provide your information to others if we are required to do so by law or under some unusual other circumstances which the Privacy Act permits.</P>
      <H2 id="how-can-you-check-update-or-change-the-information-we-are-holding">How can you check, update or change the information we are holding?</H2>
      <P className="my-8">Upon receipt of your written request and enough information to allow us to identify the information, we will disclose to you the personal information we hold about you. We will also correct, amend or delete any personal information that we agree is inaccurate.</P>
      <P className="my-8">If you wish to access or correct your personal information please write to Mikal Howard at mikal@mikalhowardfinance.com.au and we can manually amend the information or you can be set up with your own manual access to my software and manage it yourself.</P>
      <P className="my-8">We do not charge for receiving a request for access to personal information or for complying with a correction request.</P>
      <H2 id="your-consent">Your Consent</H2>
      <P className="my-8">By asking us to assist with your credit needs, you consent to the collection and use of the information you have provided to us for the purposes described above.</P>
      <H2 id="tell-us-what-you-think">Tell Us What You Think</H2>
      <P className="my-8">We welcome your questions and comments about privacy. If you have any concerns or complaints, please contact Mikal Howard on 0419 820 366 and/or mikal@mikalhowardfinance.com.au as your first point of call. For further assistance, please refer to your Credit Guide provided by your Mortgage Broker.</P>
      <H2 id="internal-dispute-resolution">Internal Dispute Resolution</H2>
      <P className="my-8">If you do have a complaint, please let us know by email, because if we don’t know about it we can’t fix it. Please make sure you include as much information as you can. You should explain the details of your complaint as clearly as you can. You must do this in writing. When we receive a complaint, we will attempt to resolve it promptly.</P>
    </Section>
    <Footer />
  </div>
);

export default PrivacyPolicy;
