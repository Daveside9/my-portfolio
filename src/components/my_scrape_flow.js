import React from 'react';

const MyScrapeFlow = () => {
  return (
    <div>
      <h2>My Scrape Flow</h2>
      <p>
      A dynamic web application to monitor the prices and availability of grains such as rice, ginger, maize, and cocoa. Built using:
              </p>
              <ul>
                <li><strong>Flask</strong> for the backend</li>
                <li><strong>Jinja2</strong> templates for rendering data in tabular form</li>
                <li><strong>Matplotlib</strong> for visual analysis</li>
              </ul>
              <a href="http://127.0.0.1:5000/grains" target="_blank" rel="noopener noreferrer">
        Launch My Scrape Flow
      </a>
    </div>
  );
};

export default MyScrapeFlow;
