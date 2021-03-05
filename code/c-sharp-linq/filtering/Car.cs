using System.Collections.Generic;
using System.Linq;

namespace Filtering
{
    public class Car
    {
        public int Year { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int CombinedFuelEconomy { get; set; }
    }

    public static class CarExtensions
    {
        public static IEnumerable<Car> ToCar(this IEnumerable<string> csvLines)
        {
            foreach (var csvLine in csvLines)
            {
                var columns = csvLine.Split(',');

                yield return new Car()
                {
                    Year = int.Parse(columns[0]),
                    CombinedFuelEconomy = int.Parse(columns[7]),
                    Make = columns[1],
                    Model = columns[2],
                };
            }
        }
    }
}
