using Xunit;

namespace GradeBook.Test
{
    public class GradeBookTests
    {
        [Fact]
        public void BookHasName()
        {
            var book = new Book("Some Book");
            Assert.Equal(book.Name, "Some Book");
        }

        [Fact]
        public void BookCalculatesAverageGrade()
        {
            var book = new Book("");
            book.AddGrade(1);
            book.AddGrade(2);
            book.AddGrade(3);

            Assert.Equal(book.Statistics.MaxGrade, 3, 2);
            Assert.Equal(book.Statistics.Average, 2, 2);
        }
    }
}
