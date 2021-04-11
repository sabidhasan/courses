namespace c_sharp_nulls
{
    class Program
    {
        static void Main(string[] args)
        {
            var player = new PlayerCharacter("Jamie");
            player.IsNew = false;
            PlayerDisplayer.Display(player);

            PlayerCharacter[] pca = new PlayerCharacter[3] {
                new PlayerCharacter("John"),
                null,
                null
            };

            string n = pca?[2]?.Name;
            System.Console.WriteLine(n);
        }
    }
}
