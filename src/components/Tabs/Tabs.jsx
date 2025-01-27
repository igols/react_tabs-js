export const Tabs = ({ tabs, handleClick, activeTabId }) => {
  const validActiveTabId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  return (
    <ul>
      {tabs.map(item => (
        <li
          data-cy="Tab"
          key={item.id}
          className={item.id === validActiveTabId ? 'is-active' : ''}
        >
          <a
            href={`#${item.id}`}
            data-cy="TabLink"
            onClick={e => {
              e.preventDefault();
              if (item.id !== validActiveTabId) {
                handleClick(item);
              }
            }}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
