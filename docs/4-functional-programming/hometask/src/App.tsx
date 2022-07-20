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

  const [data, setData] = useState<Row[]>(undefined);
  const [initalData, setInitialData] = useState<Row[]>(undefined);

  const searchPosts = (query: string, rows: Row[]): Row[] => {
    if (!rows) return; 
    const lowerCaseQuery = query.toLocaleLowerCase();
    const searchResults = rows.filter((data: Row) => {
      return data.country.toLocaleLowerCase().includes(lowerCaseQuery) ||
        data.name.toLocaleLowerCase().includes(lowerCaseQuery) ||
        data.username.toLocaleLowerCase().includes(lowerCaseQuery);
    });
    return searchResults;
  }

  const filterPosts = (filters: number[], rows: Row[]): Row[] =>  {
    if (!rows) return; 
    const result: Row[] = [];
    filter.forEach((filterKey: number) => {
      switch(filterKey) {
        case 0: 
          const noPosts = rows.filter((row: Row) => row.posts === 0)
          result.push(...noPosts)
        break;
        case 1: 
          const posts100 = rows.filter((row: Row) => row.posts >= 100)
          result.push(...posts100)
        break;
      }
      
    });
    return result;
  };

  const sortPosts = (direction: string, rows: Row[]): Row[] => {
    if (!rows) return;
    return rows.sort((rowA: Row, rowB: Row) => {
      return direction === "asc" ? rowA.lastPayments - rowB.lastPayments : rowB.lastPayments - rowA.lastPayments;
    })
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
    console.log(filter);
    let filteredPosts;
    if (filter.length > 0) {
      filteredPosts = filterPosts(filter, initalData);
    } else {
      filteredPosts = searchPosts(searchQuery, initalData);
    }

    const result = sortPosts(sort, filteredPosts);
    setData(result);
  }, [ searchQuery, filter, sort ])

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
