import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Table, Filters, Sort, Search } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';

import styles from './App.module.scss';

import type { Row } from './components';
import type { Image, User, Account } from '../types';

import rows from './mocks/rows.json';
import dataConverter from './libs/dataConverter';

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data;

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filter, setFilter] = useState<number[]>([]);
  const [sort, setSort] = useState<string>('');

  const [data, setData] = useState<Row[]>([]);
  const [initalData, setInitialData] = useState<Row[]>([]);

  const sortPosts = (direction: string, rows: Row[]): Row[] => {
    if (!rows) return;
    return rows.sort((rowA: Row, rowB: Row) => {
      return direction === "asc" ? rowA.lastPayments - rowB.lastPayments : rowB.lastPayments - rowA.lastPayments;
    })
  };
  const createSearchFilter = (query: string) : Function => {
    const lowerCaseQuery = query.toLocaleLowerCase();
    if (lowerCaseQuery.length === 0) return null;
    return (data: Row) => {
      return  data.country.toLocaleLowerCase().includes(lowerCaseQuery) ||
      data.name.toLocaleLowerCase().includes(lowerCaseQuery) ||
      data.username.toLocaleLowerCase().includes(lowerCaseQuery);
    }
  };
  const createPostsFilter = (filters: number[]) : Function => {
    if (filters.length === 0) return null;
    return (data: Row) => {
      return filters.some((fiterPosts: number) => {
        switch(fiterPosts) {
          case 0: 
            return data.posts === 0
          case 1: 
            return data.posts >= 100
        }
      })
    }
  }
  const orFilters = (...args) => {
    const filters = args.filter((f: Function) => f);
    return (array: Row[]): Row[] => {
      // find elements in array
      if (filters.length > 0) {
        return array.filter((row: Row) => {
          // where elements suits any of filter conditions
          return filters.some((filter: Function) => {
            return filter(row);
          })
        })
      }
      return array;
    }
  };
  useEffect(() => {
    // fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()]).then(([images, users, accounts]: [Image[], User[], Account[]]) => {
      const preparedData = dataConverter(users, accounts, images);
      setInitialData(preparedData);
    });
  }, [])

  // get computed data
  useEffect(() => {
      const searchFilter = createSearchFilter(searchQuery);
      const postsFilter = createPostsFilter(filter);
      const filteredRows = orFilters(postsFilter, searchFilter)(initalData);
      const result = sortPosts(sort, filteredRows);
      setData(result);
  }, [ initalData, searchQuery, filter, sort ])

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters updateStore={setFilter}/>
            <Sort updateStore={setSort}/>
          </div>
          <Search updateStore={setSearchQuery}/>
        </div>
        <Table rows={data || mockedData} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
