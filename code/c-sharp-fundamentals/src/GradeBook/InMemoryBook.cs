using System;
using System.Collections.Generic;

namespace GradeBook
{
    public delegate void GradeAddedDelegate(object sender, EventArgs args);

    public class InMemoryBook : Book
    {
        List<double> Grades;
        public override event GradeAddedDelegate GradeAdded;
        public override BookStatistics Statistics {
            get
            {
                return new BookStatistics(Grades);
            }
        }

        public override int GradeCount {
            get
            {
                return Grades.Count;
            }
        }

        public InMemoryBook(string name) : base(name)
        {
            Grades = new List<double>();
        }

        public override void AddGrade(double grade)
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
    }
}
