import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { allCategoriesSelector } from '../src/store/selectors'
import { fetchCategories } from '../src/store/actions';

function App() {
  const allCategories = useSelector(allCategoriesSelector)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])
  return (
    <div className="App">
      {allCategories.map((category: any) => (<p key={category.id}>{category.name}</p>))}
    </div>
  );
}

export default App;
