using System;
using System.Collections.Generic;

namespace GradeBook
{
    class Program
    {
        private static void Main(string[] args)
        {   
            var grades = new List<double>() { 66.7, 55.7, 99.1 };
            var result = 0.0;

            foreach (var grade in grades) {
                result += grade;
            }

            result /= grades.Count;

            System.Console.WriteLine($"{result.ToString().Substring(0, 5)}%");
        }
    }
}
