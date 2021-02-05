#nullable enable

using System.Collections.Generic;
using System.IO;

namespace c_sharp_collections
{
    public class CSVReader
    {
        public static List<Country> ParseCountries(string path)
        {
            var countries = new List<Country>();

            using(var reader = new StreamReader(path))
            {
                // Read headers
                var line = reader.ReadLine();

                while ((line = reader.ReadLine()) != null)
                {
                    Country? country = ParseCountryFromLine(line);
                    if (country != null) countries.Add(country);
                }
            }

            return countries;
        }

        private static Country? ParseCountryFromLine(string? line)
        {
            if (line == null) return null;

            string[] values = line.Split(',');
            int population = int.Parse(values[1]);
            return new Country(values[0], population);
        }
    }
}