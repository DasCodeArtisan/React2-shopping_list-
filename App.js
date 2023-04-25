import React, { useState } from 'react';
import './styles.css';

const App = () => {
    const [items, setItems] = useState([]);

    function onSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const input = form.item;
        const newItems = [...items, input.value];
        setItems(newItems);
         form.reset();
        

    }

    function onRemoveItem(itemToRemove) {
        const newItems = items.filter((item) => {
            return item !== itemToRemove;
        });
        setItems(newItems);
    }


    return (
        <div>
            <>
                <h1>Project 4: Shopping List</h1>
                <div className="shopping-list">
                    <h2>Items To Buy</h2>
                    <form onSubmit={onSubmit}>
                        <input
                            type="text"  placeholder="Add a new item "
                            name="item"
                            required />
                        <button>Add</button>
                    </form>
                    <ul>
                        {items.map((item, index) => (
                            <Items items={item} onRemoveItem={onRemoveItem} key={item + index} />
                        ))}
                    </ul>
                </div>
            </>
        </div>
    )
}

function Items({ items, onRemoveItem }) {
    return (
        <>
            <li>
                {items}
                <button className='delete' onClick={() => onRemoveItem(items)}>x</button>
            </li>
        </>
    )
}


export default App
