
import CategoryItem from './categoryItem';

const categories = [
  {
    imageSrc: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    altText: 'Bedroom category image',
    categoryName: 'Bedroom',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1613688684407-cc73e44fdc74?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWF0dHJlc3N8ZW58MHx8MHx8fDA%3D',
    altText: 'Matrass category image',
    categoryName: 'Matress',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1667992403195-d2241a40ca2d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3V0ZG9vciUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
    altText: 'Outdoor category image',
    categoryName: 'Outdoor',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
    altText: 'Sofa category image',
    categoryName: 'Sofa',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D',
    altText: 'Kitchen category image',
    categoryName: 'Kitchen',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
    altText: 'Living room category image',
    categoryName: 'Living room',
  },
];

const CategoriesSection = () => (
  <section className="mx-auto grid max-w-[1200px] grid-cols-2 px-6 lg:grid-cols-3 lg:gap-5">
    {categories.map((category, index) => (
      <CategoryItem key={index} {...category} />
    ))}
  </section>
);

export default CategoriesSection;
