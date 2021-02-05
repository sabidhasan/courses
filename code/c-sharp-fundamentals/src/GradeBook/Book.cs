using System;
using System.Collections.Generic;

namespace GradeBook
{

    public abstract class Book : NamedObject, IBook
    {
        public Book(string name) : base(name)
        {
        }

        public abstract BookStatistics Statistics
        {
            get;
        }

        public abstract event GradeAddedDelegate GradeAdded;

        public abstract void AddGrade(double grade);

        public abstract int GradeCount
        {
            get;
        }
    }
}