import React from 'react';
import Header from './Header';

/**
 * Props for the MainAppLayout component.
 */
interface MainAppLayoutProps {
  /**
   * The content to be rendered within the main layout area.
   * This typically represents the page-specific components.
   */
  children: React.ReactNode;
}

/**
 * The primary layout structure for the application.
 * It establishes a consistent shell with a fixed header and a main content area.
 * This component ensures that page content is correctly positioned below the fixed header.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main className="pt-16"> {/* Add padding-top to prevent content from being obscured by the h-16 fixed header */}
        {/* This container div applies the standard padding for all main content areas. */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
