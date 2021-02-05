using System.IO;
using System;
using System.Collections.Generic;

namespace GradeBook
{
    public class DiskBook : Book, IBook
    {
        public override BookStatistics Statistics {
            get {
                return new BookStatistics(getGradesFromDisk());
            }
        }

        public override int GradeCount
        {
            get
            {
                return getGradesFromDisk().Count;
            }
        }

        public DiskBook(string name) : base(name)
        {
            // Create file if not exists
            if (!File.Exists(getFilePath)) {
                File.Create(getFilePath).Close();
            }
        }

        public override event GradeAddedDelegate GradeAdded;

        public override void AddGrade(double grade)
        {
            if (grade < 0 || grade > 100) throw new ArgumentException($"Invalid value '{grade}' for {nameof(grade)}");

            using(var writer = File.AppendText(getFilePath))
            {
                writer.WriteLine(grade.ToString());
                GradeAdded(this, new EventArgs());
            }
        }

        private string getFilePath
        {
            get
            {
                return $"{Name}.gb";
            }
        }

        private List<double> getGradesFromDisk()
        {
            var ret = new List<double>();
            string[] lines;
            try
            {
                lines = File.ReadAllLines(getFilePath);
            }
            catch
            {
                System.Console.WriteLine("Could not read file from path");
                return ret;
            }

            foreach (var line in lines)
            {
                try
                {
                    ret.Add(double.Parse(line));
                }
                catch
                {
                    System.Console.WriteLine("Skipping unreadable grade");
                }
            }

            return ret;
        }
    }
}