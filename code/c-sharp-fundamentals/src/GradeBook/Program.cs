using System;
using System.Collections.Generic;
using GradeBook;

namespace System
{
    class Program
    {
        public static void Main(string[] args)
        {   
            var myBook = new Book("Alice in Wonderland");
            myBook.AddGrade(78);
            myBook.AddGrade(86.77);
            myBook.AddGrade(94);
            myBook.ShowStatistics();
        }
    }
}
