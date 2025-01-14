import React, { useState } from 'react';
import './CollapsibleBlock.css'; // CSS for styling the collapsible block

const CollapsibleBlock = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle block visibility

  const toggleBlock = () => {
    setIsOpen(!isOpen); // Toggle the state on click
  };

  return (
    <div className="collapsible-block">
      <div className="block-header" onClick={toggleBlock}>
        <h3>{title}</h3>
      </div>
      {isOpen && (
        <div className="block-content">
          {children} {/* Render children (content) if the block is open */}
        </div>
      )}
    </div>
  );
};

export default CollapsibleBlock;
