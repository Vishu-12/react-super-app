import React, { useEffect, useState } from "react";
import profile from "../assets/image-profile.png";

const GENRE_LIST = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export default function Movies() {
  const selectedMoviesByUser = JSON.parse(
    localStorage.getItem("selectedMovie")
  );
  const selectedGenresToFetch = selectedMoviesByUser?.map((movie) => {
    return GENRE_LIST.find((genre) => genre.name === movie);
  });
  const [movies, setMovies] = useState([
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/tDmAhKMBv0e4sYyg4FX5LVfe64S.jpg",
      genre_ids: [28, 878, 53, 10749],
      id: 1072589,
      original_language: "th",
      original_title: "สลิธ โปรเจกต์ล่า",
      overview:
        "After a deadly forest fire sweeps the earth and fills the air with pollutants, society is on the brink of collapse and riddled with disease. The only hope seems to be in a legend come to life: that of the Slyth, a reptilian species that can disguise themselves as humans and possesses blood that can cure disease. The hunt is on.",
      popularity: 485.291,
      poster_path:
        "https://image.tmdb.org/t/p/original/6muOqoxmcR1AzHhiKaPUfvvpCIq.jpg",
      release_date: "2023-12-05",
      title: "Slyth: The Hunt Saga",
      video: false,
      vote_average: 4.417,
      vote_count: 6,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/6Xfj8wD7GoEysgcFayRKd6QLqai.jpg",
      genre_ids: [10749, 35, 18],
      id: 843527,
      original_language: "en",
      original_title: "The Idea of You",
      overview:
        "Solène, a 40-year-old single mom, begins an unexpected romance with 24-year-old Hayes Campbell, the lead singer of August Moon, the hottest boy band on the planet. When Solène must step in to chaperone her teenage daughter's trip to the Coachella Music Festival after her ex bails at the last minute, she has a chance encounter with Hayes and there is an instant, undeniable spark. As they begin a whirlwind romance, it isn't long before Hayes' superstar status poses unavoidable challenges to their relationship, and Solène soon discovers that life in the glare of his spotlight might be more than she bargained for.",
      popularity: 457.596,
      poster_path:
        "https://image.tmdb.org/t/p/original/zDi2U7WYkdIoGYHcYbM9X5yReVD.jpg",
      release_date: "2024-05-02",
      title: "The Idea of You",
      video: false,
      vote_average: 7.442,
      vote_count: 878,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/4CcUgdiGe83MeqJW1NyJVmZqRrF.jpg",
      genre_ids: [10749, 18],
      id: 937287,
      original_language: "en",
      original_title: "Challengers",
      overview:
        'Tennis player turned coach Tashi has taken her husband, Art, and transformed him into a world-famous Grand Slam champion. To jolt him out of his recent losing streak, she signs him up for a "Challenger" event — close to the lowest level of pro tournament — where he finds himself standing across the net from his former best friend and Tashi\'s former boyfriend.',
      popularity: 456.258,
      poster_path:
        "https://image.tmdb.org/t/p/original/H6vke7zGiuLsz4v4RPeReb9rsv.jpg",
      release_date: "2024-04-18",
      title: "Challengers",
      video: false,
      vote_average: 7.252,
      vote_count: 775,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/oDiFx3cXdNWfRReDm2WsaRqSxMj.jpg",
      genre_ids: [35, 10749],
      id: 1211307,
      original_language: "es",
      original_title: "Noche de bodas",
      overview:
        "Lucía and Nico, the couple of the century, are about to say yes... although not with each other. It turns out that they both decided to get married on the same day and in the same place, but with other people.",
      popularity: 382.512,
      poster_path:
        "https://image.tmdb.org/t/p/original/2iQoSPyAGHseY5NhMM28orLkxjq.jpg",
      release_date: "2024-03-07",
      title: "Weeding Night",
      video: false,
      vote_average: 7.571,
      vote_count: 28,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/omHLKG9Q51tS0TlsiuJgw28D1uN.jpg",
      genre_ids: [10749, 18],
      id: 895959,
      original_language: "en",
      original_title: "Float",
      overview:
        "Waverly thought she had her future figured out, she’d start her medical residency in Toronto after a summer visit to her parents in Taipei. When her plans suddenly change, she makes an impulsive detour to a small Canadian town where she meets local lifeguard Blake. After he saves her from nearly drowning at a beach party, Blake offers to teach Waverly to swim, and as the lessons continue, the two unexpectedly find themselves falling in love.",
      popularity: 326.949,
      poster_path:
        "https://image.tmdb.org/t/p/original/kPpaxvoQJ2xomVtirSqbDDNl79T.jpg",
      release_date: "2024-02-09",
      title: "Float",
      video: false,
      vote_average: 6.93,
      vote_count: 57,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/pdhDFmVQSA0f5i5IL0gpWROjgZ5.jpg",
      genre_ids: [10749, 35],
      id: 621,
      original_language: "en",
      original_title: "Grease",
      overview:
        "Australian good girl Sandy and greaser Danny fell in love over the summer. But when they unexpectedly discover they're now in the same high school, will they be able to rekindle their romance despite their eccentric friends?",
      popularity: 302.466,
      poster_path:
        "https://image.tmdb.org/t/p/original/czVhhAaSBFpakur7U8pOIDV9NUG.jpg",
      release_date: "1978-07-07",
      title: "Grease",
      video: false,
      vote_average: 7.396,
      vote_count: 7007,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/gMssbddpo4thHGHMpQEZC00Sq9.jpg",
      genre_ids: [28, 18, 10752, 10749, 53],
      id: 369885,
      original_language: "en",
      original_title: "Allied",
      overview:
        "In 1942, an intelligence officer in North Africa encounters a female French Resistance fighter on a deadly mission behind enemy lines. When they reunite in London, their relationship is tested by the pressures of war.",
      popularity: 295.142,
      poster_path:
        "https://image.tmdb.org/t/p/original/sV4lXM32quwminL3TP36nlNPp7Q.jpg",
      release_date: "2016-11-17",
      title: "Allied",
      video: false,
      vote_average: 6.792,
      vote_count: 4412,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/odXPsc6GyLlAHa64orhAkpmYNLU.jpg",
      genre_ids: [35, 18, 10749],
      id: 696,
      original_language: "en",
      original_title: "Manhattan",
      overview:
        "Manhattan explores how the life of a middle-aged television writer dating a teenage girl is further complicated when he falls in love with his best friend's mistress.",
      popularity: 260.152,
      poster_path:
        "https://image.tmdb.org/t/p/original/k4eT3EvfxW1L9Wmt04UqJqCvCR6.jpg",
      release_date: "1979-04-25",
      title: "Manhattan",
      video: false,
      vote_average: 7.743,
      vote_count: 2305,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/j9eOeLlTGoHoM8BNUJVNyWmIvCi.jpg",
      genre_ids: [10749, 35],
      id: 1072790,
      original_language: "en",
      original_title: "Anyone But You",
      overview:
        "After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
      popularity: 242.535,
      poster_path:
        "https://image.tmdb.org/t/p/original/yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg",
      release_date: "2023-12-21",
      title: "Anyone But You",
      video: false,
      vote_average: 7.073,
      vote_count: 1555,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
      genre_ids: [878, 10749, 35],
      id: 792307,
      original_language: "en",
      original_title: "Poor Things",
      overview:
        "Brought back to life by an unorthodox scientist, a young woman runs off with a lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
      popularity: 238.008,
      poster_path:
        "https://image.tmdb.org/t/p/original/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
      release_date: "2023-12-07",
      title: "Poor Things",
      video: false,
      vote_average: 7.785,
      vote_count: 3427,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/3W6ifzDqxINcxsZQypwupTPue8m.jpg",
      genre_ids: [10749, 18, 35],
      id: 323260,
      original_language: "cn",
      original_title: "鴨王",
      overview:
        "Fung looks like a super-heartthrob and was bon with a special endowment, making him the high school idol. He was expelled from school when he was caught fighting on campus. When his mom, the sole provider of his family with her poultry business, had to stop working due to her back problems, Fung decides to support his family financially. And from that moment, his life takes on a tumultuous change…",
      popularity: 225.606,
      poster_path:
        "https://image.tmdb.org/t/p/original/v0YIyJc5EtAGciCZsvqsW2QPRAr.jpg",
      release_date: "2015-01-29",
      title: "The Gigolo",
      video: false,
      vote_average: 4.6,
      vote_count: 23,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/m0XCtFisSD0O6P55G1pUHdFccuL.jpg",
      genre_ids: [10749, 35],
      id: 1093231,
      original_language: "en",
      original_title: "Mother of the Bride",
      overview:
        "A doting mom jets off to a tropical island resort for her daughter's wedding — only to discover the groom's father is the ex she hasn't seen in decades.",
      popularity: 221.928,
      poster_path:
        "https://image.tmdb.org/t/p/original/vdTvwykMWvVgdaViBVRh8IFTku5.jpg",
      release_date: "2024-05-08",
      title: "Mother of the Bride",
      video: false,
      vote_average: 5.873,
      vote_count: 142,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/lntyt4OVDbcxA1l7LtwITbrD3FI.jpg",
      genre_ids: [18, 10749],
      id: 1010581,
      original_language: "es",
      original_title: "Culpa mía",
      overview:
        "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
      popularity: 221.312,
      poster_path:
        "https://image.tmdb.org/t/p/original/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
      release_date: "2023-06-08",
      title: "My Fault",
      video: false,
      vote_average: 7.981,
      vote_count: 2540,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/ibianpvL865w7rBPAg3sPlEXUyh.jpg",
      genre_ids: [35, 10749],
      id: 339404,
      original_language: "en",
      original_title: "The Layover",
      overview:
        "When their plane is rerouted due to a hurricane warning, two single female best friends find themselves competing for the same guy during an extended layover in St. Louis.",
      popularity: 221.272,
      poster_path:
        "https://image.tmdb.org/t/p/original/kb9osnqanXRpkpm1bnSqAhKoq5T.jpg",
      release_date: "2017-09-01",
      title: "The Layover",
      video: false,
      vote_average: 5.381,
      vote_count: 679,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/1Uh8yuXlFcMDpVHWZJidjanT06e.jpg",
      genre_ids: [28, 80, 10749],
      id: 319,
      original_language: "en",
      original_title: "True Romance",
      overview:
        "Clarence marries hooker Alabama, steals cocaine from her pimp, and tries to sell it in Hollywood, while the owners of the coke try to reclaim it.",
      popularity: 221.177,
      poster_path:
        "https://image.tmdb.org/t/p/original/39lXk6ud6KiJgGbbWI2PUKS7y2.jpg",
      release_date: "1993-09-09",
      title: "True Romance",
      video: false,
      vote_average: 7.542,
      vote_count: 2608,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/zYeYZuqXuB2nfIR4zfKhaDWHeF6.jpg",
      genre_ids: [35, 10749],
      id: 14347,
      original_language: "en",
      original_title: "Blame It on Rio",
      overview:
        "Matthew Hollis is man on holiday in Rio with his best friend. Both men have teenage daughters with them. When Matthew falls for his best friend's amorous daughter named Jennifer, they embark on a secret, if slightly one-sided relationship. Jennifer's father is furious when he finds out about the 'older man' in his daughter's life, and sets out to hunt him down with the aid of Matthew!",
      popularity: 218.474,
      poster_path:
        "https://image.tmdb.org/t/p/original/yzNtmqL6HUFC7FZl9DnGmhnCQUL.jpg",
      release_date: "1984-02-17",
      title: "Blame It on Rio",
      video: false,
      vote_average: 5.627,
      vote_count: 161,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/gHz4ZQytRs8YGrqFMwB3Vrr8pig.jpg",
      genre_ids: [18, 10749, 878],
      id: 274870,
      original_language: "en",
      original_title: "Passengers",
      overview:
        "A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.",
      popularity: 217.472,
      poster_path:
        "https://image.tmdb.org/t/p/original/oZpdONg32luHu0g8HcysuPgSlIK.jpg",
      release_date: "2016-12-21",
      title: "Passengers",
      video: false,
      vote_average: 6.945,
      vote_count: 12888,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/soJGAjMOnvHaWZvAZm7r5OMTpM4.jpg",
      genre_ids: [18, 28, 10752, 10749],
      id: 28966,
      original_language: "en",
      original_title: "Wings",
      overview:
        "Two young men, one rich, one middle class, both in love with the same woman, become US Air Corps fighter pilots and, eventually, heroic flying aces during World War I. Devoted best friends, their mutual love of the girl eventually threatens their bond. Meanwhile, a hometown girl who's the lovestruck lifelong next door neighbor of one of them pines away.",
      popularity: 217.075,
      poster_path:
        "https://image.tmdb.org/t/p/original/kEl6KCBgdmT1Nex3ka0EIWAOmtm.jpg",
      release_date: "1927-08-12",
      title: "Wings",
      video: false,
      vote_average: 7.2,
      vote_count: 254,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/mvddOYK8TAuSVbZissvU5FLcHMb.jpg",
      genre_ids: [10749, 18, 53],
      id: 3767,
      original_language: "en",
      original_title: "Gilda",
      overview:
        "A gambler discovers an old flame while in Argentina, but she's married to his new boss.",
      popularity: 208.955,
      poster_path:
        "https://image.tmdb.org/t/p/original/46eKPjoWEyNBAQKDoXEcDFBcaUw.jpg",
      release_date: "1946-04-25",
      title: "Gilda",
      video: false,
      vote_average: 7.524,
      vote_count: 551,
    },
    {
      adult: false,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/2T4bqHgYfzXNQoALJsvhW40kDTg.jpg",
      genre_ids: [10749, 18],
      id: 167073,
      original_language: "en",
      original_title: "Brooklyn",
      overview:
        "In 1950s Ireland and New York, young Eilis Lacey has to choose between two men and two countries.",
      popularity: 205.932,
      poster_path:
        "https://image.tmdb.org/t/p/original/cs7W8j5lI7qzRW6tKSj9p1Q0Ze7.jpg",
      release_date: "2015-10-20",
      title: "Brooklyn",
      video: false,
      vote_average: 7.315,
      vote_count: 3010,
    },
  ]);
  // useEffect(() => {
  //   async function fetchMovies(id) {
  //     const url = `https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${id}age=1`;
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-key":
  //           "5fe6d2dcbfmsh66e779f0368fc7cp1f2b38jsndae75f641069",
  //         "x-rapidapi-host": "advanced-movie-search.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.text();
  //       return result;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   const promises = selectedGenresToFetch?.map((genre) => {
  //     return fetchMovies(genre.id);
  //   });
  //   promises?.forEach(async (promise) => {
  //     setTimeout(async () => {
  //       const result = await promise;
  //       setMovies((prev) => [...prev, JSON.parse(result)]);
  //       console.log(movies);
  //     }, 5000); // becasue of rate-limit
  //   });
  // }, [selectedGenresToFetch]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "2rem",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1 className="heading">Super app</h1>
          <img src={profile} alt="" width={80} height={80} />
        </div>
        <p style={{ fontSize: "1.4rem", marginBottom: "3rem" }}>
          Entertainment according to your choice
        </p>

        <div
          style={{
            display: "grid",
            width: "80vw",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "2rem",
          }}
        >
          {movies?.map((movie) => {
            return (
              <div key={movie.id}>
                <img src={movie?.poster_path} alt="" width={300} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
