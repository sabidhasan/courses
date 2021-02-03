using System;

namespace GradeBook
{
    public class BookStatistics {
        public double Average;
        public double MaxGrade;
        public double MinGrade;
        public char LetterGrade;

        public BookStatistics(double average, double maxGrade, double minGrade, char letterGrade)
        {
            this.Average = average;
            this.MaxGrade = maxGrade;
            this.MinGrade = minGrade;
            this.LetterGrade = letterGrade;
        }

        public void Print()
        {
            Console.WriteLine($"Avg Grade: {this.Average:N2}%");
            Console.WriteLine($"Max Grade: {this.MaxGrade:N2}%");
            Console.WriteLine($"Min Grade: {this.MinGrade:N2}%");
            Console.WriteLine($"Letter Grade: {this.LetterGrade}");
        }
    }

}
