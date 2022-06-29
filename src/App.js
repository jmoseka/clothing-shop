const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      subtitle: '',
    },
    {
      id: 1,
      title: 'Jackets',
      subtitle: '',
    },
    {
      id: 1,
      title: 'Sneakers',
      subtitle: '',
    },
    {
      id: 1,
      title: 'Women',
      subtitle: '',
    },
    {
      id: 1,
      title: 'Men',
      subtitle: '',
    },
  ];

  return (
    <div className="categories-container">
      {
        categories.map(({ id, title }) => (
          <div key={id} className="category-container">

            <div className="background-image">
              <img src="img" alt="img" />
              <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
              </div>
            </div>

          </div>
        ))
      }

    </div>
  );
};

export default App;
