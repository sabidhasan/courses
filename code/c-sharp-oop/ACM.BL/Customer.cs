using System;
using System.Collections.Generic;
using System.Linq;
using Acme.Common;

namespace ACM.BL
{
    public enum CustomerType
    {
        BUSINESS,
        RESIDENTIAL,
        GOVERNMENT
    }
    
    public abstract class Customer : EntityClass, ILoggable
    {
        public Customer()
        {
            this.CustomerId = Guid.NewGuid().ToString();
            this.AddressList = new List<Address>();
        }

        public Customer(string customerId)
        {
            this.CustomerId = customerId;
            this.AddressList = new List<Address>();
        }

        public string CustomerId { get; protected set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public Address MailingAddress { get; set; }
        public List<Address> AddressList { get; set; }
        public abstract CustomerType type { get; }

        public string FullName
        {
            get
            {
                var names = new[] { FirstName, LastName };
                var validNames = names.Where(x => !String.IsNullOrEmpty(x));
                return String.Join(' ', validNames);
            }
        }

        public string Log()
        {
            return $"{this.FirstName} {this.LastName}";
        }

        public override bool Validate()
        {
            return !String.IsNullOrWhiteSpace(LastName) && !String.IsNullOrWhiteSpace(FirstName) &&
                !String.IsNullOrWhiteSpace(EmailAddress) && MailingAddress != null;
        }
    }
}
