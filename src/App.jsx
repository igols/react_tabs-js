import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [select, setSelect] = useState('');
  const [selectNumb, setSelectNumb] = useState('');

  const handleClick = item => {
    setSelect(item.content);
    setSelectNumb(item.title);
  };

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${selectNumb}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(item => (
              <li className="is-active" data-cy="Tab" key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-cy="TabLink"
                  onClick={() => handleClick(item)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {select}
        </div>
      </div>
    </div>
  );
};
