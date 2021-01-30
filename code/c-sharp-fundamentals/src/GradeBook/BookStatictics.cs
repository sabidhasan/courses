using System;

namespace GradeBook
{
    public class BookStatistics {
        public double Average;
        public double MaxGrade;
        public double MinGrade;

        public BookStatistics(double average, double maxGrade, double minGrade)
        {
            this.Average = average;
            this.MaxGrade = maxGrade;
            this.MinGrade = minGrade;
        }

        public void Print()
        {
            Console.WriteLine($"Avg Grade: {this.Average:N2}%");
            Console.WriteLine($"Max Grade: {this.MaxGrade:N2}%");
            Console.WriteLine($"Min Grade: {this.MinGrade:N2}%");
        }
    }

}
