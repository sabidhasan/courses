using System;

namespace QueriesExample
{
    class Movie
    {
        public string Name { get; set; }
        public double Rating { get; set; }
        public int Year { get; set; }

        public override string ToString()
        {
            return $"{Name}: {Rating} ({Year})";
        }
    }
}
