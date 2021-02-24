namespace ACM.BL
{
    public class ResidentialCustomer : Customer
    {
        public override CustomerType type { get; } = CustomerType.RESIDENTIAL;

        public ResidentialCustomer() : base()
        {
        }

        public ResidentialCustomer(string customerId) : base(customerId)
        {
        }

        public override bool Validate()
        {
            return true;
        }
    }
}