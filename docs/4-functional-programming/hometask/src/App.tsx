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
  const [filter, setFilter] = useState<string[]>([]);
  const [sort, setSort] = useState<string>('');

  const [data, setData] = useState<Row[]>(undefined);
  const [initalData, setInitialData] = useState<Row[]>(undefined);

  const search = (query: string, rows: Row[]): Row[] => {
    const lowerCaseQuery = query.toLocaleLowerCase();
    const searchResults = rows.filter((data: Row) => {
      return data.country.toLocaleLowerCase().includes(lowerCaseQuery) ||
        data.name.toLocaleLowerCase().includes(lowerCaseQuery) ||
        data.username.toLocaleLowerCase().includes(lowerCaseQuery);
    });
    return searchResults;
  }

  const filterPosts = (rows: Row[]): Row[] =>  {
    return rows
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
    const result = filterPosts(initalData);
    
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
