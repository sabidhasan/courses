namespace ACM.BL
{
    public class BusinessCustomer : Customer
    {
        public override CustomerType type { get; } = CustomerType.BUSINESS;
        public string BusinessName { get; set; }

        public BusinessCustomer() : base()
        {
        }

        public BusinessCustomer(string customerId) : base(customerId)
        {
        }

        public override bool Validate()
        {
            return BusinessName != null;
        }
    }
}