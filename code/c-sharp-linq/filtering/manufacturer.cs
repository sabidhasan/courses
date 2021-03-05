using System.Collections.Generic;

namespace Filtering
{
    public class Manufacturer
    {
        public string Name { get; set; }
        public string Country { get; set; }
        public int Year { get; set; } 
    }

    public static class ManufacturerExtensions
    {
        public static IEnumerable<Manufacturer> ToManufacturer(this IEnumerable<string> csvLines)
        {
            foreach (var csvLine in csvLines)
            {
                var values = csvLine.Split(',');

                yield return new Manufacturer()
                {
                    Name = values[0],
                    Country = values[1],
                    Year = int.Parse(values[2])
                };
            }
        }
    }
}