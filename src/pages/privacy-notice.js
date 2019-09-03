import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";
import Anchor from "@narative/gatsby-theme-novela/src/components/Anchor";
import Paragraph from "../components/Paragraph";

import { css } from "@emotion/core";
import mediaqueries from "@styles/media";

function PrivacyNotice() {
  return (
    <Layout>
      <SEO title="Privacy Notice" />
      <Section css={headings}>
        <div style={{ marginTop: "100px" }}>
          <Headings.h1>Privacy Notice</Headings.h1>
        </div>
        <Paragraph>
            <b>This notice obligates us to protect user privacy and personal data provided via this website.</b>
        </Paragraph>

        <Paragraph>
            This notice provides information about the types of information we may collect from you when you visit our website and explains how we use such data, as well as describes the steps we take in order to protect them. The notice also describes the options you have with regard to the collection and use of your data when you visit our website.
        </Paragraph>

        <Headings.h2>Newsletter subscription</Headings.h2>
        <Paragraph>
            We are using <Anchor href="https://mailchimp.com/legal/privacy/">Mailchimp</Anchor> for sending newsletter emails and collecting data on subscribers (e-mail address, first and last name, date of subscription, consent). By entering your email in the newsletter subscription form and clicking on the Subscribe button, you give your permission to be contacted about new content on this website via Email. Your data is being kept until you ask for it to be deleted from our newsletter. In any moment you can unsubscribe from the newsletter by clicking on the link at the bottom of the newsletter email or by sending us an email at <Anchor href="mailto:mario@laravelista.hr">mario@laravelista.hr</Anchor>.
        </Paragraph>

        <Headings.h2>Website Monitoring</Headings.h2>
        <Paragraph>
            We use <Anchor href="https://policies.google.com/technologies/partner-sites" rel="nofollow">Google Analytics</Anchor> for the purpose of collecting and analyzing website visit frequency.
        </Paragraph>

      </Section>
    </Layout>
  );
}

export default PrivacyNotice;

const ARTICLE_WIDTH = css`
  width: 100%;
//   max-width: 680px;

  ${mediaqueries.desktop`
    // max-width: 507px;
  `}

  ${mediaqueries.tablet`
    // max-width: 486px;
  `};

  ${mediaqueries.phablet`
    padding: 0 20px;
  `};
`;

const HeadingsCSS = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 auto;
  }

  h1,
  h1 *,
  h2,
  h2 * {
    margin: 25px auto 18px;

    ${mediaqueries.tablet`
      margin: 30px auto 18px;
    `};
  }

  h3,
  h3 * {
    margin: 20px auto 10px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${ARTICLE_WIDTH};
  }
`;

const headings = css`
  ${HeadingsCSS}
`;