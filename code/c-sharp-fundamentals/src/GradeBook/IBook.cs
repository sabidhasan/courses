namespace GradeBook
{
    public interface IBook
    {
        void AddGrade(double grade);
        string Name { get; }
        event GradeAddedDelegate GradeAdded;
        BookStatistics Statistics { get; }
        int GradeCount { get; }
    }
}