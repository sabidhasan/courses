using System;
using System.Collections.Generic;
using System.Linq;

namespace ACM.BL
{
    public class Customer
    {
        public Customer()
        {
            this.CustomerId = Guid.NewGuid().ToString();
        }

        public Customer(string customerId)
        {
            this.CustomerId = customerId;
        }

        public string CustomerId { get; private set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public string MailingAddress { get; set; }

        public string FullName
        {
            get
            {
                var names = new[] { FirstName, LastName };
                var validNames = names.Where(x => !String.IsNullOrEmpty(x));
                return String.Join(' ', validNames);
            }
        }

        public bool IsValid()
        {
            return !String.IsNullOrWhiteSpace(LastName) && !String.IsNullOrWhiteSpace(FirstName) &&
                !String.IsNullOrWhiteSpace(EmailAddress) && !String.IsNullOrWhiteSpace(MailingAddress);
        }

        public static Customer Retrieve(string id)
        {
            // TODO: actually get the customer
            return new Customer();
        }

        public static List<Customer> Retrieve()
        {
            // TODO: actually get all customers
            return new List<Customer>();
        }
    }
}
