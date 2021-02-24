namespace ACM.BL
{
    public class GovernmentCustomer : Customer
    {
        public override CustomerType type { get; } = CustomerType.GOVERNMENT;
        public string Country { get; set; } 

        public GovernmentCustomer() : base()
        {
        }

        public GovernmentCustomer(string customerId) : base(customerId)
        {
        }

        public override bool Validate()
        {
            return Country != null;
        }
    }
}