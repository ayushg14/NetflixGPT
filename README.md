# Netflix-GPT

- Create React App
- Configured Tailwind CSS
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- https://netflixgpt-40a14.web.app/
- Create Signup User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Redux (npm i -D @reduxjs/toolkit & npm i react-redux) both
- Implemented Sign Out
- Update Profile (Pending)
- BugFix: Sign up user displayName and profile picture update (Still pending)
- BugFix: if the user is not logged in Redirect/ browse to Login Page and vice-versa.
- Unsubscribe to the onAuthStateChange callback
- Add hardcoded values to the constants file
- Register TMDB API & create an app & get access token
- GET data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with Movies Data
- Planning for MainContainer & SecondaryContainer
- Fetch data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Youtube video and make it autoplay and mute
- Tailwind Classes to make MainContainer looks awesome
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URl
- Made the Browse page amazing with Tailwind CSS
- usePopularMovies Custom Hook
- GPT Search Page
- GPT Search Bar
- Multi-Language Feature in our App
- Get openAi Api Key
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Reused Movie List component to make movie suggestion container
- Memoziation
- Added .env file
- Adding .env file to .gitignore
- Made our Site Responsive

# Features

- Login/Sign Up
  - Sign In / Sign Up Form
  - redirect to Browse Page
- Browse(after auth comes)
  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N
- NetflixGPT
  - Search Bar
  - MovieSuggestions

# Browse

- MainConatainer
  - VideoBackground
  - VideoTitle
- SecondaryConatiner
  - MoviesList \* n
    - Cards \* n

# Compoenent used

- Formik - for forms validation
- Regex to see email validation and password validation to test in (utils component)
