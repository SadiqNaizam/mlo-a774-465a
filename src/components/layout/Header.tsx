import React from 'react';
import TopHeader from '../Dashboard/TopHeader';

/**
 * A layout component that renders the main application header.
 * It serves as a wrapper to provide fixed positioning for the header content,
 * ensuring it remains visible at the top of the viewport during scroll.
 */
const Header: React.FC = () => {
  // This wrapper div applies the fixed positioning required by the application layout.
  // The `TopHeader` component, provided from context, contains the actual header content
  // (logo, navigation, user profile) and its own styling (height, background, padding).
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <TopHeader />
    </div>
  );
};

export default Header;
