import React from "react";
import styled from "@emotion/styled";

import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Paginator from "@narative/gatsby-theme-novela/src/components/Navigation/Navigation.Paginator";

import ArticlesHero from "@narative/gatsby-theme-novela/src/sections/articles/Articles.Hero";
import ArticlesList from "@narative/gatsby-theme-novela/src/sections/articles/Articles.List";

function ArticlesPage({ location, pageContext }) {
  const articles = pageContext.group;
  const authors = pageContext.additionalContext.authors;

  return (
    <Layout>
      <SEO pathname={location.pathname} />
      <ArticlesHero authors={authors} />
      <Section narrow>
        <ArticlesList articles={articles} />
        <ArticlesPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ArticlesPaginator>
      </Section>
      {/* <ArticlesGradient /> */}
    </Layout>
  );
}

export default ArticlesPage;

const ArticlesGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 95px;`}
`;
