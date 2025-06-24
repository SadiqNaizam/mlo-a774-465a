import React from 'react';

import PageHeader from '../components/Dashboard/PageHeader';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import MainAppLayout from '../components/layout/MainAppLayout';

/**
 * Dashboard Overview Page
 *
 * This is the main page for the dashboard, presenting a high-level
 * overview of key metrics. It serves as the primary view for the user upon login.
 * The page is composed of several high-level components:
 * - PageHeader: Displays the main title of the page.
 * - StatsCardGrid: A grid of cards showing important statistics.
 *
 * These components are rendered within the MainAppLayout, which provides the
 * consistent header and overall page structure.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col gap-6">
        <PageHeader />
        <StatsCardGrid />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
