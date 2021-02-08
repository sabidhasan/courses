using System.Collections.Generic;

namespace ACM.BL
{
    public class Product
    {
        public Product(int productId)
        {
            this.ProductId = productId;
        }

        public int ProductId { get; private set; }
        public string ProductDescription { get; set; }
        public string ProductName { get; set; }
        public float? Price { get; set; }

        public static Product Retrieve(int id)
        {
            // TODO: actually get the customer
            return new Product(id);
        }

        public static List<Product> Retrieve()
        {
            // TODO: actually get all customers
            return new List<Product>();
        }
    }
}
