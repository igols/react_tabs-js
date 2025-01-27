export const Tabs = ({ tabs, handleClick, selectId }) => (
  <ul>
    {tabs.map(item => (
      <li
        data-cy="Tab"
        key={item.id}
        className={item.id === selectId ? 'is-active' : ''}
      >
        <a
          href={`#${item.id}`}
          data-cy="TabLink"
          onClick={e => {
            e.preventDefault();
            handleClick(item);
          }}
        >
          {item.title}
        </a>
      </li>
    ))}
  </ul>
);
