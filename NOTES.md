Common TMDB Image Sizes:
| Size       | Use Case        |
| ---------- | --------------- |
| `w92`      | Tiny thumbnails |
| `w154`     | Small cards     |
| `w342`     | Medium cards    |
| `w500`     | Movie posters   |
| `w780`     | Large images    |
| `original` | Full resolution |

For most React movie apps:

* Use `w500` for posters.
* Use `original` or `w780` for backdrops/banners.

Image url path - https://image.tmdb.org/t/p/{image_size}/{poster_path.etc}
For more info - https://developer.themoviedb.org/docs/image-basics?utm_source=chatgpt.com

Video url path - https://api.themoviedb.org/3/movie/{id}/videos?api_key=47dee29f80f751643eab4ed3a5dd9999&language=en-US

Youtube watch and embed URL :-
https://www.youtube.com/watch?v=SUXWAEX2jlg
https://www.youtube.com/embed/SUXWAEX2jlg

Discover filters:-

page=1 -> first 20 results
sort_by=popularity.asc | vote_average.desc | vote_count.desc | release_date.desc | revenue.desc
vote_average.gte=7
vote_count.gte=500
with_genres=28        // Action
with_genres=35        // Comedy
with_original_language=ja
primary_release_year=2025