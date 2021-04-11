namespace c_sharp_nulls
{
    class Program
    {
        static void Main(string[] args)
        {
            var player = new PlayerCharacter("Jamie", SpecialDefence.Null);
            player.IsNew = false;
            PlayerDisplayer.Display(player);

            PlayerCharacter[] pca = new PlayerCharacter[3] {
                new PlayerCharacter("John", new IronDefence()),
                new PlayerCharacter("John 2", SpecialDefence.Null),
                null
            };

            string n = pca?[2]?.Name;
            System.Console.WriteLine(n);

            System.Console.WriteLine("Taking damage");
            pca[0].TakeDamage();
            pca[1].TakeDamage();
            foreach (PlayerCharacter p in pca)
            {
                if (p != null) PlayerDisplayer.Display(p);
            }
        }
    }
}
