
import Directory from "../componnents/directory/directory.component";


const home = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl:'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl:'https://images.unsplash.com/photo-1605022600390-071c6f969b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl:'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80'
    },
    {
      id: 4,
      title: "Womens",
      imageUrl:'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      id: 5,
      title: "Mens",
      imageUrl:'https://i.ibb.co/R70vBrQ/men.png'
    },
  ];
  return (
      <>
        <Directory categories={categories}/>
      </>
  );
};

export default home;
