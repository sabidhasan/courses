using System;
using System.Collections.Generic;

namespace ACM.BL
{
    public class OrderItem
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
    }
}
