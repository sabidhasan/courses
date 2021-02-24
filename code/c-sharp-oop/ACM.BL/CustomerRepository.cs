using System.Collections.Generic;
using System.Linq;

namespace ACM.BL
{
    public class CustomerRepository : BaseRepository
    {
        private AddressRepository addressRepository { get; set; } 

        public CustomerRepository()
        {
            this.addressRepository = new AddressRepository();
        }

        public override Customer Retrieve(string id)
        {
            // TODO: actually get the customer
            var customer = new BusinessCustomer();
            if (id == "1")
            {
                customer.FirstName = "Test";
                customer.LastName = "Blah";
                customer.AddressList = addressRepository.Retrieve().ToList();
            }

            return customer;
        }

        public override IEnumerable<Customer> Retrieve()
        {
            // TODO: actually get all customers
            return new List<Customer>();
        }

        public bool Save(Customer customer)
        {
            // TODO: save the customer
            return true;
        }
    }
}