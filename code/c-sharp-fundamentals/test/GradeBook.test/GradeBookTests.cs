using Xunit;

namespace GradeBook.Test
{
    public class GradeBookTests
    {
        [Fact]
        public void BookHasName()
        {
            var book = new InMemoryBook("Some Book");
            Assert.Equal(book.Name, "Some Book");
        }

        [Fact]
        public void CanChangeBookName()
        {
            InMemoryBook book = new InMemoryBook("Old Name");
            book.Name = "New name";
            Assert.Equal(book.Name, "New name");
        }

        [Fact]
        public void BookCalculatesAverageGrade()
        {
            var book = new InMemoryBook("");
            book.AddGrade(1);
            book.AddGrade(2);
            book.AddGrade(3);

            Assert.Equal(book.Statistics.MaxGrade, 3, 2);
            Assert.Equal(book.Statistics.Average, 2, 2);
        }

        // [Fact]
        // public void RejectsInvalidGrades()
        // {
        //     Book book = new Book("SomeTitle");
        //     Assert.Equal(book.GradeCount, 0);

        //     book.AddGrade(1000);
        //     Assert.Equal(book.GradeCount, 0);

        //     book.AddGrade(-1);
        //     Assert.Equal(book.GradeCount, 0);
        // }

        [Fact]
        public void AcceptsValidGrades()
        {
            InMemoryBook book = new InMemoryBook("Some Title");
            book.AddGrade(100);
            Assert.Equal(book.GradeCount, 1);

            book.AddGrade(0);
            Assert.Equal(book.GradeCount, 2);
        }

        [Fact]
        public void ComputesLetterGrade()
        {
            InMemoryBook book = new InMemoryBook("A book");
            book.AddGrade(90);
            Assert.Equal(book.Statistics.LetterGrade, 'A');
            book.AddGrade(10);
            Assert.Equal(book.Statistics.LetterGrade, 'F');
        }
    }
}
