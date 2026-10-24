# 🎬 MovieFlix

A Netflix-inspired movie discovery web app built with **React** and **Vite**, powered by the [TMDB API](https://www.themoviedb.org/). Browse trending, popular, top-rated, upcoming and now-playing movies, and keep track of what you want to watch.

**🔗 Live demo:** [movie-flix-three-pi.vercel.app](https://movie-flix-three-pi.vercel.app)

<!-- Add 2-3 screenshots here (home page, movie details, watchlist). Example:
![Home page](./public/screenshots/home.png)
-->

## Features

<!-- Tick [x] what is already built. Delete or move anything unfinished to the Roadmap section. -->

- [ ] Home page with a hero banner (trending this week) and horizontal rows for Popular, Top Rated, Upcoming and Now Playing
- [ ] Movie details with trailer playback (YouTube embed)
- [ ] Watchlist: add/remove movies, no duplicates, heart icon toggles on each card
- [ ] Watchlist count shown in the navbar
- [ ] Watchlist saved in `localStorage` and restored on page load
- [ ] Loading spinner and error message for every API call
- [ ] Sticky header


## Tech Stack

| Area | Tools |
| --- | --- |
| UI | React 19 |
| Build tool | Vite 8 |
| Routing | React Router 7 |
| HTTP client | Axios |
| Dates | Day.js |
| Icons | React Icons, SVGs via `vite-plugin-svgr` |
| Styling | CSS Modules |
| Linting | ESLint 9 |
| Data | [TMDB API](https://developer.themoviedb.org/docs) |
| Hosting | Vercel |

## Getting Started

### Prerequisites

- Node.js (latest LTS recommended) and npm
- A free TMDB API key ([create one here](https://www.themoviedb.org/settings/api))

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/KSAdhikari008/MovieFlix.git
cd MovieFlix

# 2. Install dependencies
npm install

# 3. Add your TMDB API key (see below)
cp .env.example .env

# 4. Start the dev server
npm run dev
```

### Environment variables

Create a `.env` file in the project root:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

> `.env` is git-ignored. Never commit your API key. When deploying to Vercel, add the same variable under **Project Settings → Environment Variables**.

### Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## How It Works

**Data flow.** Each page fetches data from TMDB with Axios. Every request follows the same state flow so the UI never gets stuck:

```
Component mounts
  → loading = true, movies = [], error = null
  → render spinner
  → API request
      ├─ success → movies = data, loading = false → render movies
      └─ failure → error = message, loading = false → render error
```

**TMDB endpoints used**

| Section | Endpoint |
| --- | --- |
| Hero banner | `/trending/movie/week` |
| Popular | `/discover/movie?sort_by=popularity.desc` |
| Top Rated | `/movie/top_rated` |
| Upcoming | `/movie/upcoming` |
| Now Playing | `/movie/now_playing` |
| Trailers | `/movie/{id}/videos` |

**Images.** Poster and backdrop paths from the API are combined with `https://image.tmdb.org/t/p/{size}/{path}`. Posters use `w500`; backdrops and banners use `w780` or `original`.

**Watchlist.** Watchlist state lives in a React Context so the navbar, movie cards, details page and watchlist page all stay in sync. It is saved to `localStorage` whenever it changes and loaded again on startup.

## Project Structure

```
MovieFlix/
├── public/            # Static assets
├── src/               # Application source code
├── index.html
├── vite.config.js
├── vercel.json        # Vercel deployment config
├── eslint.config.js
├── NOTES.md           # Development notes
└── TO-DO.md           # Planned work
```

<!-- Optionally expand src/ with your real folders, e.g. components/, pages/, context/, hooks/ -->

## Roadmap

- [ ] Finish remaining pages
- [ ] Search
- [ ] Responsive polish for mobile
- [ ] Add screenshots to this README

## Acknowledgements

This product uses the TMDB API but is not endorsed or certified by TMDB.

## Author

**K. S. Adhikari** · [GitHub](https://github.com/KSAdhikari008)
