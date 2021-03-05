using System;
using System.Collections.Generic;
using Features.CustomLinq;

namespace Features
{
    class Program
    {
        static void Main(string[] args)
        {
            Employee[] devs = new Employee[]
            {
                new Employee() { Id = 1, Name = "Abid" },
                new Employee() { Id = 2, Name = "Steve" }
            };

            List<Employee> salesPeople = new List<Employee>()
            {
                new Employee() { Id = 3, Name = "John" }
            };

            Console.WriteLine($"{devs.Length} {salesPeople.Count}");

            // Coming from custom extension methods
            Console.WriteLine($"{devs.Count()} {salesPeople.Count()}");
        }
    }
}
