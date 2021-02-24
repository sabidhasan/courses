using System.Collections.Generic;
using Acme.Common;

namespace ACM.BL
{
    public class OrderItem : ILoggable
    {
        public OrderItem(int orderItemId)
        {
            this.OrderItemId = orderItemId;
        }

        public int OrderItemId { get; private set; }
        public int Quantity { get; set; }
        public float? PurchasePrice { get; set; }
        public int ProductId { get; set; }

        public static Order Retrieve(int id)
        {
            // TODO: actually get the customer
            return new Order(id);
        }

        public static List<Order> Retrieve()
        {
            // TODO: actually get all customers
            return new List<Order>();
        }

        public string Log()
        {
            return this.OrderItemId.ToString();
        }
    }
}
