body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-image: url('https://static.vecteezy.com/system/resources/previews/013/102/567/non_2x/modern-globe-world-map-holographic-projector-on-technology-background-vector.jpg');
  background-size: cover; /* Ensures the image covers the entire background */
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #8bf171;
}

.App {
  text-align: center;
}

/* Navbar styling */
.nav-header {
  background: rgba(9, 9, 12, 0.932);
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-header ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.nav-header li {
  margin: 0 15px;
}

.nav-header a {
  text-decoration: none;
  color: rgb(56, 247, 9);
  font-size: 2rem;
  transition: color 0.3s;
}

.nav-header a:hover {
  color: #7d1cd8;
}

/* Profile picture styling */
.profile-picture {
  width: 75px; /* Fixed smaller width */
  height: 75px; /* Keep it square */
  object-fit: cover; /* Ensures the image fits into the square without distortion */
  border-radius: 50%; /* Makes the image a perfect circle */
  border: 2px solid #e271f1; /* Adds a decorative border */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adds a subtle shadow for a nice effect */
  margin: 20px auto; /* Centers the image with margin spacing */
  display: block; /* Centers the image in block layout */
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  /* Navbar styling on smaller screens */
  .nav-header ul {
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  .nav-header li {
    margin: 10px 0;
  }

  .nav-header a {
    font-size: 1.5rem; /* Reduce font size for mobile */
  }

  /* Profile picture on smaller screens */
  .profile-picture {
    width: 50px; /* Adjust size for mobile */
    height: 50px;
  }
}

@media (max-width: 480px) {
  /* Further adjust profile picture size for very small screens */
  .profile-picture {
    width: 40px; /* Even smaller size for very small screens */
    height: 40px;
  }

  /* Further adjust font size for very small screens */
  .nav-header a {
    font-size: 1.2rem; /* Reduce font size */
  }
}
