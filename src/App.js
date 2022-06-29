import './categories.styles.scss';
import Directory from './components/directory/directory.component';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.postimg.cc/MKyMNc4C/mary-oloumi-KYKn-R-pf-URc-unsplash.jpg',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.postimg.cc/6QQ88M3K/amanda-vick-oh-Wf6-Yuz-OQk-unsplash.jpg',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.postimg.cc/m2x1m3d3/warren-jones-LFl-Vu-WLj-YEo-unsplash.jpg',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.postimg.cc/Zn6RGgf8/corey-saldana-p-IKQbd-Sz-F-k-unsplash.jpg',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.postimg.cc/8zSWzdMk/sam-burriss-e-B0-Emi-v-JRk-unsplash.jpg',
    },
  ];

  return (
    <div className="categories-container">
      <Directory categories={categories} />
    </div>
  );
};

export default App;
