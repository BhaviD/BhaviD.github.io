import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Layout } from '@components';
import { FormattedIcon } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Main } from '@styles';
const { colors, fonts, fontSizes } = theme;

const StyledMainContainer = styled(Main)``;
const StyledTableContainer = styled.div`
  margin: 100px -20px;
  ${media.tablet`
    margin: 100px -10px;
  `};
`;
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  .hide-on-mobile {
    ${media.tablet`
      display: none;
    `};
  }

  tbody tr {
    transition: ${theme.transition};

    &:hover,
    &:focus {
      background-color: ${colors.lightNavy};
    }
  }
  th,
  td {
    cursor: default;
    line-height: 1.5;
    padding: 10px 20px;
    ${media.tablet`
      padding: 10px;
    `};
  }
  th {
    text-align: left;
  }
  td {
    &.year {
      width: 10%;
      ${media.tablet`
        font-size: ${fontSizes.sm};
      `};
    }
    &.title {
      padding-top: 15px;
      color: ${colors.lightestSlate};
      font-size: ${fontSizes.xl};
      font-weight: 700;
    }
    &.tags {
      font-size: ${fontSizes.xs};
      font-family: ${fonts.SFMono};
      .separator {
        margin: 0 5px;
      }
      span {
        display: inline-block;
      }
    }
    &.links {
      span {
        display: flex;
        align-items: center;
        a {
          ${mixins.flexCenter};
        }
        a + a {
          margin-left: 10px;
        }
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

const ArchivePage = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges;

  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealPosts = useRef([]);
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig());
    revealPosts.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
  }, []);

  return (
    <Layout location={location}>
      <Helmet>
        <title>Blog | Bhavi Dhingra</title>
        <link rel="canonical" href="https://bhavidhingra.com/blog" />
      </Helmet>

      <StyledMainContainer>
        <header ref={revealTitle}>
          <h1 className="big-title">Blog</h1>
          <p className="subtitle">A list of blogs I’ve written.</p>
        </header>

        <StyledTableContainer ref={revealTable}>
          <StyledTable>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th className="hide-on-mobile">Tags</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {posts.length > 0 &&
                posts.map(({ node }, i) => {
                  const {
                    date,
                    github,
                    external,
                    title,
                    tags,
                  } = node.frontmatter;
                  return (
                    <tr key={i} ref={el => (revealPosts.current[i] = el)}>
                      <td className="overline year">{`${new Date(date).getFullYear()}`}</td>

                      <td className="title">{title}</td>

                      <td className="tags hide-on-mobile">
                        {tags.length > 0 &&
                          tags.map((item, i) => (
                            <span key={i}>
                              {item}
                              {''}
                              {i !== tags.length - 1 && <span className="separator">&middot;</span>}
                            </span>
                          ))}
                      </td>

                      <td className="links">
                        <span>
                          {external && (
                            <a
                              href={external}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label="External Link">
                              <FormattedIcon name="Medium" />
                            </a>
                          )}
                          {github && (
                            <a
                              href={github}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label="GitHub Link">
                              <FormattedIcon name="GitHub" />
                            </a>
                          )}
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </StyledTable>
        </StyledTableContainer>
      </StyledMainContainer>
    </Layout>
  );
};
ArchivePage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ArchivePage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            tags
            github
            external
          }
          html
        }
      }
    }
  }
`;
