namespace c_sharp_collections
{
    public class Country
    {
        public string Name { get; private set; }
        public int Population { get; private set; }

        public Country(string name, int population)
        {
            this.Name = name;
            this.Population = population;
        }
    }
}
