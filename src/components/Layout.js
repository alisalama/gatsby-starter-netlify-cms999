import React, { useState } from 'react';
import Helmet from 'react-helmet';
import Footer from './Footer';
import Navbar from './Navbar';
import BackToTop from './BackToTop';
import '../styling/core_blue.scss';
import '../styling/icons.scss';
import 'typeface-muli';
// import 'typeface-lato';
import useSiteMetadata from './SiteMetadata'
import CookieConsent from "react-cookie-consent";

const TemplateWrapper = ({ children }) => {

  // get the metadata
  const { title, description, keywords } = useSiteMetadata();
  const [bodyCss] = useState('hero is-default is-bold is-fullheight');
  // const [bodyCss, setCss] = useState('hero is-default is-bold is-fullheight is-medium is-feature-wave is-relative is-pricing');

  return (

    <>
      <Helmet>
        <html lang="en" className=" js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/favicon@2x.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/favicon@2x.png"
          color="#ff4400"
        />

        {/* More meta properties */}
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />

      </Helmet>
      <div className={`${bodyCss}`}>

        <div className="pageloader"></div>
        <div className="infraloader"></div>

        <Navbar />
          {children}
        <Footer />

        {/* <!-- Back To Top Button --> */}
        <BackToTop />

      </div>

      <CookieConsent 
        location="bottom"
        buttonText="Accept cookies"
        disableButtonStyles={false}
        buttonClasses="button btn-align btn-more is-link color-secondary"
        cookieName="bluprntsCookieAcceptance"
        acceptOnScroll={true}
        acceptOnScrollPercentage={7}
        debug={false}
        style={{ background: "#022F55" }}
        expires={150}
      >
          This website uses cookies to enhance the user experience. By continuing to use this website, you consent to our use of these cookies.
      </CookieConsent>

    </>

  )

}

export default TemplateWrapper
