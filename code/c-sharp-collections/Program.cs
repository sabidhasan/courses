using System;

namespace c_sharp_collections
{
    class Program
    {
        static void Main(string[] args)
        {
            var daysOfWeek = new[] { "Test" };

            foreach (var day in daysOfWeek)
            {
                System.Console.WriteLine(day);
            }
        }
    }
}
