import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Styles from './Tabs.styles.scss';

const context = classNames.bind(Styles);

const Tabs = ({
  onUpdate,
  selectedKey,
  defaultSelectedKey,
  children,
  navTabsClassName,
  tabsContainerClassName,
  navLinkClassName,
  activeClassName,
}) => {
  const [items, updateItems] = useState([]);

  useEffect(() => {
    const itemsCollection = [];
    React.Children.forEach(children, (element) => {
      if (React.isValidElement(element)) {
        const {
          name,
          eventKey: key,
          children: component,
        } = element.props;
        itemsCollection.push({
          name,
          key,
          component,
        });
      }
    });
    updateItems(itemsCollection);
  }, [children]);

  const [activeTab, updateTab] = useState(
    defaultSelectedKey || (items && items.length ? items[0].key : null),
  );
  const handleUpdate = (key) => {
    updateTab(key);
    if (onUpdate) {
      onUpdate(key);
    }
  };

  const renderItem = () => {
    const selectedTab = items.find(({ key }) => key === (selectedKey || activeTab));
    return selectedTab ? selectedTab.component : null;
  };

  return (
    <>
      <nav className={context('nav-tabs', navTabsClassName)}>
        {items.map(({ key: item, name }, index) => (
          <a
            key={item}
            className={context('tab-item', navLinkClassName, {
              [activeClassName || Styles.active]: activeTab === item,
            })}
            onClick={() => handleUpdate(item)}
            role="tab"
            tabIndex={index}
          >
            {name}
          </a>
        ))}
      </nav>
      <section className={context(tabsContainerClassName)}>
        {renderItem()}
      </section>
    </>
  );
};

Tabs.propTypes = {
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  defaultSelectedKey: PropTypes.string,
  navLinkClassName: PropTypes.string,
  navTabsClassName: PropTypes.string,
  onUpdate: PropTypes.func,
  selectedKey: PropTypes.string,
  tabsContainerClassName: PropTypes.string,
};

Tabs.defaultProps = {
  activeClassName: null,
  defaultSelectedKey: null,
  navLinkClassName: null,
  navTabsClassName: null,
  onUpdate: null,
  selectedKey: null,
  tabsContainerClassName: null,
};

export default Tabs;
