using System;
using System.Collections.Generic;
using Acme.Common;

namespace ACM.BL
{
    public class Order : ILoggable
    {
        public Order(int orderId)
        {
            this.OrderId = orderId;
        }

        public int OrderId { get; private set; }
        public DateTimeOffset? OrderDate { get; set; }
        public int ShippingAddressId { get; set; }
        public int CustomerId { get; set; }
        public List<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

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
            return $"{this.OrderId} - {this.OrderDate}";
        }
    }
}
