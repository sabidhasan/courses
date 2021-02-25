using Microsoft.VisualStudio.TestTools.UnitTesting;
// using Acme.Common;

namespace Acme.Common.Test
{
    [TestClass]
    public class StringHandlerTest
    {
        [TestMethod]
        public void TestAddSpaces()
        {
            var source = "TestString";
            var expected = "Test String";
            var actual = source.InsertSpaces();
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void TestMultipleSpaces()
        {
            var source = "Test  String";
            var expected = "Test String";
            var actual = source.InsertSpaces();
            Assert.AreEqual(expected, actual);
        }
    }
}
