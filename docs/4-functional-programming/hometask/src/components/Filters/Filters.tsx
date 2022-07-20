import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

import styles from './Filters.module.scss';

interface FiltersProps {
  store?: {};
  updateStore?: (val) => void;
}

// OR

//interface FiltersProps {
//  selected?: {};
//  updateSelected?: (val) => void;
//}

// OR store can be global

const OPTIONS = [
  {
    title: 'Without posts',
    key: 0
  },
  {
    title: 'More than 100 posts',
    key: 1
  },
];

export function Filters(props: FiltersProps) {
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);

  const onChange = (option) => {
    console.log(option); // for debugging

    let updatedFilters;
    if (selectedFilter.find((filter: any) => filter.key === option.key)) {
      updatedFilters = selectedFilter.filter(
        (filter: any) => filter.key !== option.key
      );
    } else {
      updatedFilters = [...selectedFilter, option];
    }

    setSelectedFilter(updatedFilters);
    console.log(updatedFilters)
    props.updateStore(updatedFilters.map((item) => item.key));
  };

  return (
    <div className={styles.group}>
      <div className={styles.title}>Filter by posts</div>
      <ul className={styles.list}>
        {OPTIONS.map((option) => (
          <li
            value={option.title}
            onClick={() => onChange(option)}
            key={option.key}
          >
            <Checkbox
              checked={!!selectedFilter.find((filter:any) => filter.key === option.key)}
              value={option.title}
              onChange={() => onChange(option)}
              size="small"
              color="primary"
            />{' '}
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
