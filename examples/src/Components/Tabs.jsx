import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Tabs.css';

const Tabs = ({ items, onUpdate }) => {
  const [activeTab, updateTab] = useState(items[0]);
  const handleUpdate = (key) => {
    updateTab(key);
    onUpdate(key);
  };

  return (
    <nav className="nav-tabs">
      {items.map((item, index) => (
        <a
          key={item}
          className={`tab-item ${activeTab === item ? 'active' : ''}`}
          onClick={() => handleUpdate(item)}
          role="tab"
          tabIndex={index}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

Tabs.propTypes = {
  items: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Tabs;
