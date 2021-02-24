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
            Customer customer = new BusinessCustomer() { FirstName = "Test", LastName = "Last" };
            string expected = "Test Last";
            Assert.AreEqual(expected, customer.FullName);
        }

        [TestMethod]
        public void AddressList()
        {
            Customer customer = new BusinessCustomer() { FirstName = "Test", LastName = "Last" };
            Assert.IsNotNull(customer.AddressList);
            Assert.AreEqual(0, customer.AddressList.Count);
        }

        [TestMethod]
        public void WithOmittedLastName()
        {
            Customer customer = new BusinessCustomer() { FirstName = "First" };
            string expected = "First";
            Assert.AreEqual(expected, customer.FullName);
        }

        [TestMethod]
        public void WithOmittedFirstName()
        {
            Customer customer = new BusinessCustomer() { LastName = "Last" };
            string expected = "Last";
            Assert.AreEqual(expected, customer.FullName);
        }

        [TestMethod]
        public void AssignsUuid()
        {
            Customer customer = new BusinessCustomer();
            Assert.AreEqual(false, System.String.IsNullOrEmpty(customer.CustomerId));
        }

        [TestMethod]
        public void InstantiateWithCustomerId()
        {
            Customer customer = new BusinessCustomer("1234");
            Assert.AreEqual("1234", customer.CustomerId);
        }

        [TestMethod]
        public void ValidatesProperCustomer()
        {
            var address = new Address("123 Main", AddressType.HOME);
            Customer customer = new BusinessCustomer() { FirstName = "A", LastName = "B", EmailAddress = "2@f.com", MailingAddress = address };
            Assert.AreEqual(true, customer.IsValid);
        }

        [TestMethod]
        public void ValidatesNoFirstName()
        {
            var address = new Address("123 Main", AddressType.HOME);
            Customer customer = new BusinessCustomer() { LastName = "B", EmailAddress = "S@f.com", MailingAddress = address };
            Assert.AreEqual(false, customer.IsValid);
        }

        [TestMethod]
        public void ValidateHandlesEmptyFields()
        {
            var address = new Address("123 Main", AddressType.HOME);
            Customer customer = new BusinessCustomer() { FirstName = "", LastName = "B", EmailAddress = "2@f.com", MailingAddress = address };
            Assert.AreEqual(false, customer.IsValid);
        }
    }
}
