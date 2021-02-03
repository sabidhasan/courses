using Xunit;

namespace GradeBook.Test
{
    public class TypeTests
    {
        [Fact]
        public void RejectsInvalidGrades()
        {
            Book book = GetBook("SomeTitle");
            Assert.Equal(book.GradeCount, 0);

            book.AddGrade(1000);
            Assert.Equal(book.GradeCount, 0);

            book.AddGrade(-1);
            Assert.Equal(book.GradeCount, 0);
        }

        [Fact]
        public void AcceptsValidGrades()
        {
            Book book = GetBook("Some Title");
            book.AddGrade(100);
            Assert.Equal(book.GradeCount, 1);

            book.AddGrade(0);
            Assert.Equal(book.GradeCount, 2);
        }

        [Fact]
        public void ComputesLetterGrade()
        {
            Book book = GetBook("A book");
            book.AddGrade(90);
            Assert.Equal(book.Statistics.LetterGrade, 'A');
            book.AddGrade(10);
            Assert.Equal(book.Statistics.LetterGrade, 'F');
        }

        Book GetBook(string title)
        {
            return new Book(title);
        }
    }
}