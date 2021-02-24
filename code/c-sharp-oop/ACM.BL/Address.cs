using Acme.Common;

namespace ACM.BL
{
    public enum AddressType
    {
        BUSINESS,
        HOME,
    }

    public class Address : EntityClass, ILoggable
    {
        public string AddressString { get; set; }
        public AddressType AddressType { get; set; } 
        
        public Address(string address, AddressType type)
        {
            this.AddressString = address;
            this.AddressType = type;
        }

        public override bool Validate()
        {
            return true;
        }

        public string Log()
        {
            return AddressString;
        }
    }
}