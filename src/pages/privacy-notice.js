import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";
import Anchor from "@narative/gatsby-theme-novela/src/components/Anchor";
import Paragraph from "../components/Paragraph";

import { css } from "@emotion/core";
import mediaqueries from "@styles/media";
import { graphql } from 'gatsby'

function PrivacyNotice({ data }) {
  return (
    <Layout>
      <SEO title="Privacy Notice" />
      <Section css={headings}>
        <div style={{ marginTop: "100px" }}>
          <Headings.h1>Privacy Notice</Headings.h1>
        </div>
        <Paragraph>
            <b>This notice obligates me to protect user privacy and personal data provided via this website.</b>
        </Paragraph>

        <Paragraph>
            This notice provides information about the types of information I may collect from you when you visit my website and explains how I use such data, as well as describes the steps I take in order to protect them. The notice also describes the options you have with regard to the collection and use of your data when you visit my website.
        </Paragraph>

        <Headings.h2>Analytics</Headings.h2>
        <Paragraph>
            I use a self-hosted version of <Anchor href="https://plausible.io/" rel="nofollow">Plausible Analytics</Anchor> for the purpose of collecting and analyzing website visit frequency. It is an open source web analytics software, built in the EU, with no cookies, no tracking and no personal data collection. <Anchor target="_blank" href={data.site.siteMetadata.analytics}>Stats are open to the public.</Anchor>
        </Paragraph>

        <Headings.h2>Cookies</Headings.h2>
        <Paragraph>This website does not use or place any cookies in the user's browser.</Paragraph>

        <Headings.h2>Third Party Services</Headings.h2>

        <Headings.h3>Mailchimp</Headings.h3>
        <Paragraph>
            I am using <Anchor href="https://mailchimp.com/legal/privacy/">Mailchimp</Anchor> for sending newsletter emails and collecting data on subscribers (e-mail address, first and last name, date of subscription, consent). By entering your email in the newsletter subscription form and clicking on the Subscribe button, you give your permission to be contacted about new content on this website via Email. Your data is being kept until you ask for it to be deleted from my newsletter. In any moment you can unsubscribe from the newsletter by clicking on the link at the bottom of the newsletter email or by sending me an email at <Anchor href="mailto:mario@laravelista.hr">mario@laravelista.hr</Anchor>.
        </Paragraph>

        <Headings.h2>Contact</Headings.h2>
        <Paragraph>
          <b>Mario Bašić</b>, Laravelista<br />
          Markov Jose 1<br />
          Murter, HR 22243<br />
          P: 022-435-450
        </Paragraph>

      </Section>
    </Layout>
  );
}

export default PrivacyNotice;

export const query = graphql`
{
  site {
    siteMetadata {
      analytics
    }
  }
}
`

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