using GradeBook;

namespace System
{
    class Program
    {
        public static void Main(string[] args)
        {   
            Console.Write("Enter a name for the book: ");
            string userBookName = Console.ReadLine();
            var myBook = new Book(userBookName);

            // Subscribe to event delegate
            myBook.GradeAdded += OnGradeAdded;

            string userInput;
            while (true)
            {
                Console.Write("Enter a grade, or press q to show statistics: ");
                userInput = Console.ReadLine();
                if (userInput.ToLower() == "q")
                {
                    break;
                }
                try {
                    myBook.AddGrade(Double.Parse(userInput));
                } catch (Exception ex) {
                    Console.WriteLine($"Error: {ex.Message}");
                }
            };

            // Show stats
            if (myBook.GradeCount != 0)
            {
                myBook.Statistics.Print();
            }
        }

        public static void OnGradeAdded(object sender, EventArgs e)
        {
            System.Console.WriteLine("Added");
        }
    }
}
