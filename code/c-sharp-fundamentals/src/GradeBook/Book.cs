using System;
using System.Collections.Generic;

namespace GradeBook
{
    public delegate void GradeAddedDelegate(object sender, EventArgs args);

    public class Book
    {
        List<double> Grades;
        public string Name;
        public BookStatistics Statistics {
            get
            {
                return new BookStatistics(this.Average, this.MaxGrade, this.MinGrade, this.LetterGrade);
            }
        }

        public int GradeCount {
            get
            {
                return Grades.Count;
            }
        }

        public Book(string name)
        {
            Name = name;
            Grades = new List<double>();
        }

        public void AddGrade(double grade)
        {
            if (grade >= 0 && grade <= 100)
            {
                Grades.Add(grade);
                if (GradeAdded != null)
                {
                    GradeAdded(this, new EventArgs());
                }
            }
            else
            {
                throw new ArgumentException($"Invalid {nameof(grade)} - {grade} is not valid!");
            }
        }

        public event GradeAddedDelegate GradeAdded;

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

        private char LetterGrade
        {
            get
            {
                switch (this.Average)
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
        }
    }

}
