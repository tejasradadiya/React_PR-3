  import logo from './logo.svg';
  import './App.css';
  import './components/html.css'
  // import './components/Images'
  import React, { useState } from 'react';

  function App() {
    const allRecords = [
      {
        images: '/images/stack-toasted-bread-butter-tea-pile-slices-together-knife-cup-pure-white-background-46891975.webp',
        name: 'Toast + Butter + Tea',
        price: '40',
        category: 'break-fast',
      },
      {
        images: 'images/club-sandwich-con-ensalada-rusa-11549663647rg2dylm0vf.png',
        name: 'Sandwich',
        price: '50',
        category: 'lunch',
      },
      {
        images: '/images/favicon.png',
        name: 'Chinese',
        price: '90',
        category: 'Dinner',
      },
      {
        images: '/images/297-2971809_pancakes-vector-dessert-triple-chocolate-pancakes-coras-hd.png',
        name: 'Pancakes',
        price: '160',
        category: 'break-fast',
      },
      {
        images: '/images/png-transparent-chili-dog-chicago-style-hot-dog-fast-food-knackwurst-hot-dog-food-recipe-orange.png',
        name: 'Hotdog',
        price: '100',
        category: 'lunch',
      },
      {
        images: '/images/248-2485938_a-single-dish-butter-chicken-images-free-download.png',
        name: 'Panjabi',
        price: '170',
        category: 'Dinner',
      },
    ];

    const [selectedCategory, setSelectedCategory] = useState();

    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };

    const filteredRecords = selectedCategory
      ? allRecords.filter((record) => record.category === selectedCategory)
      : allRecords;

    return (
      <div className="App">
        <div className="buttons">
          <button onClick={() => handleCategoryClick()}>All</button>
          <button onClick={() => handleCategoryClick('lunch')}>lunch</button>
          <button onClick={() => handleCategoryClick('break-fast')}>break-fast</button>
          <button onClick={() => handleCategoryClick('Dinner')}>Dinner</button>
        </div>
        <table className="records-table table table-dark table-hover">
          <thead>
            <tr>
              <th className='text-secondary'>Images</th>
              <th className='text-secondary'>Name</th>
              <th className='text-secondary'>Price</th>
              <th className='text-secondary'>Category</th>
            </tr>
          </thead>
          <tbody>
            {
            filteredRecords.map((item) => {
              const { images, name, price, category } = item;
              return (
                <tr key={name}>
                  <td><img src={images} width={100} height={90}/></td>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>{category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  export default App;
