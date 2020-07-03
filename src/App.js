import React, {useState, useEffect} from 'react';
import Card from './Card'
import FilterTab from './FilterTab'
import data from './data.json'
import './App.scss';

function App() {

  const [filterData, setFilterData] = useState([])
  const [items, setItems] = useState([])

  const handleSelectFilter = (data) => {
    let copy = Object.assign([], filterData);

    if(copy.some(e => e.value === data.value && e.prop === data.prop)) {
      return HandleRemove(data)
    } else {
      copy.push(data)
      setFilterData(copy)
    }

  }

  const HandleRemove = (data) => {
    const copy = filterData.filter(e => e.value !== data.value || e.prop !== data.prop)
    setFilterData(copy)
  }

  const handleClear = () => {
    setFilterData([])
  }

  useEffect(() =>{
    setItems(data)
  }, [])

  useEffect(() =>{
    if(filterData.length > 0) {
       
      const filteredItems = data.filter((item) => {
        return filterData.every(filter => {
          if(Array.isArray(item[filter.key])){
            return item[filter.key].includes(filter.value) 
          } else if(typeof item[filter.key] === 'string') {
            return item[filter.key] === filter.value;
          }
        })
      }); 
      setItems(filteredItems)
    } else {
      setItems(data)
    }
  }, [filterData])

  return (
    <React.Fragment>
      <header></header>
      <div className='container'>
        {filterData.length > 0 && <FilterTab items={filterData} removeItem={HandleRemove} clear={handleClear} />}
        {items && items.map(item => <Card item={item} key={item.id} select={handleSelectFilter} />)}
      </div>
    </React.Fragment>
  );

}

export default App;
