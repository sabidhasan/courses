using System;

namespace c_sharp_collections
{
    class Program
    {
        static void Main(string[] args)
        {
            string path = @".\countries.csv";
            var countries = CSVReader.ParseCountries(path);
            foreach (var country in countries)
            {
                Console.WriteLine($"Country: {country.Name} has {country.Population} people");
            }
        }
    }
}
