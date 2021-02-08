using Microsoft.VisualStudio.TestTools.UnitTesting;
using ACM.BL;

namespace ACM.BLTest
{
    [TestClass]
    public class CustomerTest
    {
        [TestMethod]
        public void GeneratesFullName()
        {
            Customer customer = new Customer() { FirstName = "Test", LastName = "Last" };
            string expected = "Test Last";
            Assert.AreEqual(expected, customer.FullName);
        }

        [TestMethod]
        public void WithOmittedLastName()
        {
            Customer customer = new Customer() { FirstName = "First" };
            string expected = "First";
            Assert.AreEqual(expected, customer.FullName);
        }

        [TestMethod]
        public void WithOmittedFirstName()
        {
            Customer customer = new Customer() { LastName = "Last" };
            string expected = "Last";
            Assert.AreEqual(expected, customer.FullName);
        }

        [TestMethod]
        public void AssignsUuid()
        {
            Customer customer = new Customer();
            Assert.AreEqual(false, System.String.IsNullOrEmpty(customer.CustomerId));
        }

        [TestMethod]
        public void InstantiateWithCustomerId()
        {
            Customer customer = new Customer("1234");
            Assert.AreEqual("1234", customer.CustomerId);
        }

        [TestMethod]
        public void ValidatesProperCustomer()
        {
            Customer customer = new Customer() { FirstName = "A", LastName = "B", EmailAddress = "2@f.com", MailingAddress = "123 Main" };
            Assert.AreEqual(true, customer.IsValid());
        }

        [TestMethod]
        public void ValidatesNoFirstName()
        {
            Customer customer = new Customer() { LastName = "B", EmailAddress = "S@f.com", MailingAddress = "123 Main" };
            Assert.AreEqual(false, customer.IsValid());
        }

        [TestMethod]
        public void ValidateHandlesEmptyFields()
        {
            Customer customer = new Customer() { FirstName = "", LastName = "B", EmailAddress = "2@f.com", MailingAddress = "123 Main" };
            Assert.AreEqual(false, customer.IsValid());
        }
    }
}
