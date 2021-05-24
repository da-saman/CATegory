import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { allCategoriesSelector } from '../src/store/selectors'
import { getAllCategories } from '../src/store/actions';
import { categories } from '../src/mock/catdata'

function App() {
  const allCategories = useSelector(allCategoriesSelector)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => {
        dispatch(getAllCategories(categories))
      }}> fill categories</button>
      {allCategories.map((category: any) => (<p key={category.id}>{category.name}</p>))}
    </div>
  );
}

export default App;
