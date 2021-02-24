using System.Collections.Generic;

namespace ACM.BL
{
    public class AddressRepository : BaseRepository
    {
        public override Address Retrieve(string id)
        {
            // TODO: actually get the address
            if (id == "1")
            {
                return new Address("Address", AddressType.BUSINESS);
            }

            return null;
        }

        public override IEnumerable<Address> Retrieve()
        {
            // TODO: actually get all address
            return new List<Address>() { this.Retrieve("1") };
        }

        public bool Save(Address address)
        {
            // TODO: save the address
            return true;
        }
    }
}