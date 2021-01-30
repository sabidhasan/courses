using System;
using System.Collections.Generic;

namespace GradeBook
{
    class Book
    {
        List<double> Grades;
        public string Name;

        public Book(string name)
        {
            Name = name;
            Grades = new List<double>();
        }

        public void AddGrade(double grade)
        {
            Grades.Add(grade);
        }

        public void ShowStatistics()
        {
            System.Console.WriteLine($"Avg Grade: {this.Average:N2}%");
            System.Console.WriteLine($"Max Grade: {this.MaxGrade:N2}%");
        }

        private double Average {
            get {
                var sum = 0.0;
                foreach (var grade in Grades)
                {
                    sum += grade;
                }

                return sum / Grades.Count;
            }
        }

        private double MaxGrade {
            get {
                var max = Double.MinValue;
                foreach (var grade in Grades) {
                    max = Math.Max(grade, max);
                }
                return max > Double.MinValue ? max : Double.NaN;
            }
        }
    }
}
