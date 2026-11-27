import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_METADATA } from '../../data/siteMetadata';

export const SiteFooter: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer className="site-footer no-print" aria-label="Site footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__name">{SITE_METADATA.brandName}</span>
          <span className="site-footer__sep" aria-hidden="true">
            ·
          </span>
          <span className="site-footer__desc">
            Free GCSE, IGCSE &amp; A-Level interactive revision platform by{' '}
            <a href={SITE_METADATA.githubOrgUrl} target="_blank" rel="noreferrer">
              {SITE_METADATA.organizationName}
            </a>
          </span>
        </div>

        <nav className="site-footer__links" aria-label="Footer navigation">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/docs">API Docs</Link>
          <Link to="/api">API</Link>
          <Link to="/mcp">MCP</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/faq">FAQ</Link>
          <a href={`${baseUrl}llms.txt`}>llms.txt</a>
          <a href={`${baseUrl}sitemap.xml`}>Sitemap</a>
          <a href={SITE_METADATA.githubRepoUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
};
