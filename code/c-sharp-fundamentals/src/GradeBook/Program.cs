using System;

namespace GradeBook
{
    class Program
    {
        private static void Main(string[] args)
        {   
            Console.Write("Enter name: ");
            // string line = Console.ReadLine();
            // Console.WriteLine("Hello World! " + line);

            int i = 0;
            while (i < args.Length) {
                Console.WriteLine(args[i]);
                i++;
            }

        }
    }
}
