using System;
using System.Collections.Generic;

namespace GradeBook
{
    public class BookStatistics {
        public double Average
        {
            get;
        }
        public double MaxGrade
        {
            get;
        }
        public double MinGrade
        {
            get;
        }
        public char LetterGrade
        {
            get;
        }

        public BookStatistics(ICollection<double> grades)
        {
            Average = calculateAverage(grades);
            MaxGrade = calculateMaxGrade(grades);
            MinGrade = calculateMinGrade(grades);
            LetterGrade = calculateLetterGrade(Average);
        }

        public void Print()
        {
            Console.WriteLine($"Avg Grade: {this.Average:N2}%");
            Console.WriteLine($"Max Grade: {this.MaxGrade:N2}%");
            Console.WriteLine($"Min Grade: {this.MinGrade:N2}%");
            Console.WriteLine($"Letter Grade: {this.LetterGrade}");
        }

        private double calculateMaxGrade(ICollection<double> grades)
        {
            var max = Double.MinValue;
            foreach (var grade in grades)
            {
                max = Math.Max(grade, max);
            }
            return max > Double.MinValue ? max : Double.NaN;

        }

        private double calculateMinGrade(ICollection<double> grades)
        {
            var min = Double.MaxValue;
            foreach (var grade in grades)
            {
                min = Math.Min(grade, min);
            }
            return min < Double.MaxValue ? min : Double.NaN;
        }

        private char calculateLetterGrade(double average)
        {
            switch (average)
            {
                case var d when d >= 90.0:
                    return 'A';
                case var d when d >= 80.0:
                    return 'B';
                case var d when d >= 70.0:
                    return 'C';
                case var d when d >= 60.0:
                    return 'D';
                default:
                    return 'F';
            }
        }

        private double calculateAverage(ICollection<double> grades)
        {
            double sum = 0.0;
            foreach (var grade in grades)
            {
                sum += grade;
            }

            return sum / grades.Count;

        }
    }

}
