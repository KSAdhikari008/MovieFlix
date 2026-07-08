Make the movies page with 40 movies. Make a watchlist page. Store watchlist in an array . Make api call to get there images. 

# Movie Site – Watchlist/Favorites Feature TODO

## Core Features

* [ ] Add movies to a Watchlist
* [ ] Remove movies from the Watchlist
* [ ] Prevent duplicate movies from being added
* [ ] Display a filled/outlined heart icon depending on whether a movie is in the Watchlist
* [ ] Create a dedicated **Watchlist** page
* [ ] Display the total number of saved movies in the Navbar
* [ ] Persist the Watchlist using `localStorage`
* [ ] Restore the Watchlist automatically when the app loads

---

# React Hooks

## `useState`

**Purpose:** Store the Watchlist.

Examples:

* Watchlist array
* Selected movie
* Favorite status

---

## `useEffect`

**Purpose:** Handle side effects.

Use it to:

* Load the Watchlist from `localStorage`
* Save the Watchlist whenever it changes
* Synchronize UI with stored data

---

## `createContext`

**Purpose:** Create a global Watchlist context.

Store:

* `watchlist`
* `addMovie()`
* `removeMovie()`
* `toggleFavorite()`

---

## `useContext`

**Purpose:** Access the Watchlist from any component.

Useful in:

* Navbar
* MovieCard
* MovieDetails
* Watchlist page

---

## `useMemo` *(Optional)*

Use for expensive derived values.

Possible uses:

* Watchlist count
* Checking whether a movie is already saved
* Filtered or sorted Watchlist

---

# Browser APIs

## `localStorage`

Store:

* Entire Watchlist

Retrieve:

* Watchlist when the application starts

---

# React Concepts Practiced

* State Management
* Global State using Context
* Side Effects
* Conditional Rendering
* Event Handling
* Component Reusability
* Data Persistence
* Custom Hooks
* Derived State

---

# UI Tasks

* [ ] Add heart icon to every movie card
* [ ] Toggle heart on click
* [ ] Create Watchlist page
* [ ] Show empty-state UI when Watchlist is empty
* [ ] Display Watchlist count in Navbar
* [ ] Keep UI synchronized after page refresh

---


1) Add error hadling on all api calls. 
    Make it so that error in response stops the loading and show error. Check the flowchart in Notes.

2) Make the Header sticky like in the original site.

Apply this format HomePage:-

Hero Banner → /trending/movie/week
Popular Row → /discover/movie?sort_by=popularity.desc
Top Rated Row → /movie/top_rated
Upcoming Row → /movie/upcoming
Now Playing Row → /movie/now_playing


Make Rest of the Pages.