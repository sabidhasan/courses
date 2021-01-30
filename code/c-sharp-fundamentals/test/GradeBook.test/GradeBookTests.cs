using Xunit;

namespace GradeBook.Test
{
    public class GradeBookTests
    {
        [Fact]
        public void TestName()
        {
            var book = new Book("Some Book");
            Assert.Equal(book.Name, "Some Book");
        }

        [Fact]
        public void TestAverage()
        {
            var book = new Book("");
            book.AddGrade(1);
            book.AddGrade(2);
            book.AddGrade(3);

            var returnType = book.Statistics;

            Assert.Equal(returnType.MaxGrade, 3, 2);
            Assert.Equal(returnType.Average, 2, 2);
        }
    }
}
