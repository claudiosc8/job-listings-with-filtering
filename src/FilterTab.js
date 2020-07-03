import React from 'react';

function FilterTab({items, removeItem, clear}) {

  return (

      <div id='filterTab' className='card'>
        <div>
        {items.map((item,i) => {
          return (
            <div className='filter-tab' key={i}>
              <div className='filter-item'>{item.value}</div>
              <span className='close-button' onClick={() => removeItem(item)}></span>
            </div>
            )
          })}
        </div>
        <span onClick={clear}>Clear all</span>
      </div>

  );

}

export default FilterTab;
