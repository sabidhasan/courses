using System;
using System.Collections.Generic;

namespace QueriesExample
{
    class QueryDriver
    {
        static void Main(string[] args)
        {
            var movies = new List<Movie>() {
                new Movie() { Name = "Early Show", Rating = 8.5, Year = 1998 },
                new Movie() { Name = "88 Speeder", Rating = 9.5, Year = 1988 },
                new Movie() { Name = "Fake Movie", Rating = 6.5, Year = 2010 },
                new Movie() { Name = "Late Movie", Rating = 4.5, Year = 2015 },
            };

            var newMovies = movies.Filter(m => m.Year >= 2000);

            foreach (Movie movie in newMovies)
            {
                System.Console.WriteLine(movie);
            }
        }
    }
}
