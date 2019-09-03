import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";

import { Link } from "gatsby";

import Paragraph from "../components/Paragraph";

import { css } from "@emotion/core";
import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="Page not found" />
      <Section css={headings}>
        <div style={{ marginTop: "100px" }}>
          <Headings.h1>404</Headings.h1>
        </div>
        <Paragraph><b>The page you are looking for, could not be found.</b></Paragraph>
        <Button to="/">Go to homepage</Button>
      </Section>
    </Layout>
  );
}

export default NotFoundPage;

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

const Button = styled(props => <Link {...props} />)`

  display: flex;
  align-items: center;
  justify-content: center;
  width: 161px;
  height: 38px;
  border: 1px solid ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.accent};
  background: transparent;
  font-weight: 600;
  border-radius: 35px;
  letter-spacing: 0.42px;
  transition: border-color 0.2s var(--ease-in-out-quad),
    background 0.2s var(--ease-in-out-quad), color 0.2s var(--ease-in-out-quad);
  &:hover {
    background: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.background};
  }
  &[disabled] {
    cursor: not-allowed;
  }
  svg * {
    fill: ${p => p.theme.colors.background};
  }
  ${p => mediaqueries.tablet`
    position: relative;
    height: 60px;
    width: 100%;
    top: 0;
    left: 0;
    border: none;
    border-radius: 0;
    border-top: 1px solid ${p.theme.colors.horizontalRule};
    &:hover {
      color: initial;
      background: initial;
    }
  `}
`;