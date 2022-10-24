import useFetch from "../hooks/useFetch";

const Home = () => {
  const movies = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=5415eaf1ab2c2c480b619cd947366347&language=es-ES&page=1`
  );
  console.log(movies);

  return <div>Home</div>;
};

export default Home;
