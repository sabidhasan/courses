using System;
using System.Collections.Generic;

namespace GradeBook
{
    public class Book
    {
        List<double> Grades;
        public string Name;
        public BookStatistics Statistics {
            get
            {
                return new BookStatistics(this.Average, this.MaxGrade, this.MinGrade);
            }
        }

        public Book(string name)
        {
            Name = name;
            Grades = new List<double>();
        }

        public void AddGrade(double grade)
        {
            Grades.Add(grade);
        }

        private double Average
        {
            get {
                var sum = 0.0;
                foreach (var grade in Grades)
                {
                    sum += grade;
                }

                return sum / Grades.Count;
            }
        }

        private double MaxGrade
        {
            get
            {
                var max = Double.MinValue;
                foreach (var grade in Grades)
                {
                    max = Math.Max(grade, max);
                }
                return max > Double.MinValue ? max : Double.NaN;
            }
        }
    
        private double MinGrade
        {
            get
            {
                var min = Double.MaxValue;
                foreach (var grade in Grades)
                {
                    min = Math.Min(grade, min);
                }
                return min < Double.MaxValue ? min : Double.NaN;
            }
        }
    }

}
