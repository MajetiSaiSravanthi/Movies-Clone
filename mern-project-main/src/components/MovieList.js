// Create an array to store the movie data
const movies = [
    {
      title: "AVATAR",
      image: "D:\\movies\\images\\avatar 2.jpeg",
      alt: "Hollywood movie 1",
      link: "https://www.example.com/hollywood-movie"
    },
    {
      title: "ARRIVAL",
      image: "D:\\movies\\images\\arrival.jpg",
      alt: "Hollywood movie 2",
      link: "https://www.example.com/hollywood-movie"
    },
    // Add more movie objects here...
  ];
  
  // Function to generate the movie list HTML
  function generateMovieList(movies, sectionTitle) {
    const movieListContainer = document.createElement("div");
    movieListContainer.classList.add("movie-list");
  
    const sectionHeading = document.createElement("h2");
    sectionHeading.textContent = sectionTitle;
  
    movieListContainer.appendChild(sectionHeading);
  
    for (const movie of movies) {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");
  
      const imageElement = document.createElement("img");
      imageElement.src = movie.image;
      imageElement.alt = movie.alt;
  
      const titleElement = document.createElement("span");
      titleElement.classList.add("movie-title");
      titleElement.textContent = movie.title;
  
      const linkElement = document.createElement("a");
      linkElement.href = movie.link;
      linkElement.textContent = "Watch Now";
  
      movieElement.appendChild(imageElement);
      movieElement.appendChild(titleElement);
      movieElement.appendChild(linkElement);
  
      movieListContainer.appendChild(movieElement);
    }
  
    return movieListContainer;
  }
  
  // Get the container where the movie lists will be added
  const container = document.querySelector(".container");
  
  // Generate and append the Hollywood movies list
  const hollywoodMovies = [
    // Add Hollywood movie objects here...
  ];
  const hollywoodMoviesList = generateMovieList(hollywoodMovies, "Hollywood Movies");
  container.appendChild(hollywoodMoviesList);
  
  // Generate and append the Tollywood movies list
  const tollywoodMovies = [
    // Add Tollywood movie objects here...
  ];
  const tollywoodMoviesList = generateMovieList(tollywoodMovies, "Tollywood Movies");
  container.appendChild(tollywoodMoviesList);
  
  // Generate and append the Bollywood movies list
  const bollywoodMovies = [
    // Add Bollywood movie objects here...
  ];
  const bollywoodMoviesList = generateMovieList(bollywoodMovies, "Bollywood Movies");
  container.appendChild(bollywoodMoviesList);
  