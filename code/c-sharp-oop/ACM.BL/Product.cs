using System.Collections.Generic;
using Acme.Common;

namespace ACM.BL
{
    public class Product : EntityClass
    {
        public Product(int productId)
        {
            this.ProductId = productId;
        }

        public int ProductId { get; private set; }
        public string ProductDescription { get; set; }
        private string _productName;
        public string ProductName
        {
            get
            {
                return _productName.InsertSpaces();
            }
            set
            {
                _productName = value;
            }
        }
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

        public override bool Validate()
        {
            return true;
        }
    }
}
