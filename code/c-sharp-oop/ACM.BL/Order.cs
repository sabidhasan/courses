using System;
using System.Collections.Generic;

namespace ACM.BL
{
    public class Order
    {
        public Order(int orderId)
        {
            this.OrderId = orderId;
        }

        public int OrderId { get; private set; }
        public DateTimeOffset? OrderDate { get; set; }

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
    }
}
