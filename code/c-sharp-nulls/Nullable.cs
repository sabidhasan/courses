using System;

namespace c_sharp_nulls
{
    class Program
    {
        static void Main(string[] args)
        {
            var player = new PlayerCharacter("Jamie", SpecialDefence.Null);
            player.IsNew = false;
            PlayerDisplayer.Display(player);

            PlayerCharacter?[] pca = {
                new PlayerCharacter("John", new IronDefence()),
                new PlayerCharacter("John 2", SpecialDefence.Null),
                null
            };

            string n = pca?[1]?.Name ?? "";
            Console.WriteLine(n);

            Console.WriteLine("Taking damage");
            pca?[0]?.TakeDamage();
            pca?[1]?.TakeDamage();
            foreach (PlayerCharacter? p in pca!)
            {
                PlayerDisplayer.Display(p);
            }
        }
    }
}
