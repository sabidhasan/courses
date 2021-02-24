using Microsoft.VisualStudio.TestTools.UnitTesting;
using ACM.BL;

namespace ACM.BLTest
{
    [TestClass]
    public class CustomerRepositoryTest
    {
        [TestMethod]
        public void RetrievesMissingData()
        {
            var repository = new CustomerRepository();
            var customer = repository.Retrieve("2");
            Assert.IsNull(customer.FirstName);
        }

        [TestMethod]
        public void RetrievesData()
        {
            var repository = new CustomerRepository();
            Customer customer = repository.Retrieve("1");
            Assert.AreEqual("Test Blah", customer.FullName);
        }
    }
}