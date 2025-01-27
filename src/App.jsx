import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [select, setSelect] = useState(tabs[0].content);
  const [selectNumb, setSelectNumb] = useState(tabs[0].title);
  const [activeTabId, setactiveTabId] = useState(tabs[0].id);

  const handleClick = item => {
    setSelect(item.content);
    setSelectNumb(item.title);
    setactiveTabId(item.id);
  };

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${selectNumb}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <Tabs
            tabs={tabs}
            handleClick={handleClick}
            activeTabId={activeTabId}
          />
        </div>

        <div className="block" data-cy="TabContent">
          {select}
        </div>
      </div>
    </div>
  );
};
