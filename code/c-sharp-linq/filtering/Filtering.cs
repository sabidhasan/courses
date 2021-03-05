using System.IO;
using System.Linq;
using System.Collections.Generic;
using System;

namespace Filtering
{
    class Program
    {
        static void Main(string[] args)
        {
            var cars = GetCarsFromFile("datasets/cars.csv");
            var manufacturers = GetManufacturersFromFile("datasets/manufacturers.csv");

            // DisplayPoorPerformingCars(cars);
            DisplayMostEfficientCarsByCountry(cars, manufacturers);
        }

        private static void DisplayMostEfficientCarsByCountry(List<Car> cars, List<Manufacturer> manufacturers)
        {
            // Top 3 fuel efficient cars by country
            var query = cars
                            .Join(manufacturers, c => c.Make, m => m.Name, (c, m) => new { Manufacturer = m, Car = c })
                            .OrderBy(g => g.Manufacturer.Country)
                            .ThenByDescending(g => g.Car.CombinedFuelEconomy)
                            .GroupBy(g => g.Manufacturer.Country);

            foreach (var grouping in query)
            {
                System.Console.WriteLine($"{grouping.Key}");
                foreach (var item in grouping.Take(3))
                {
                    System.Console.WriteLine($"\t{item.Car.Make} {item.Car.Model} {item.Car.CombinedFuelEconomy}");
                }
            }
        }

        private static void DisplayPoorPerformingCars(List<Car> cars)
        {
            var query = cars.OrderBy(c => c.CombinedFuelEconomy)
                            .ThenBy(c => c.Make)
                            .Where(c => c.CombinedFuelEconomy > 10)
                            .Take(10);

            foreach (var car in query)
            {
                System.Console.WriteLine($"{car.Make} {car.Model} ({car.Year}) {car.CombinedFuelEconomy}");
            }

        }

        private static List<Car> GetCarsFromFile(string path)
        {
            return File.ReadAllLines(path)
                       .Skip(1)
                       .Where(i => i.Length > 1)
                       .ToCar()
                       .ToList();
        }
 
        private static List<Manufacturer> GetManufacturersFromFile(string path)
        {
            return File.ReadAllLines(path)
                       .Skip(1)
                       .Where(l => l.Length > 1)
                       .ToManufacturer()
                       .ToList();
        }
    }
}
