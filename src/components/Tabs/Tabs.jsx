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
          onClick={() => handleClick(item)}
        >
          {item.title}
        </a>
      </li>
    ))}
  </ul>
);
