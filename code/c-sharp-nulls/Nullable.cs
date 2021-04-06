namespace c_sharp_nulls
{
    class Program
    {
        static void Main(string[] args)
        {
            var player = new PlayerCharacter("Jamie");
            player.IsNew = false;
            PlayerDisplayer.Display(player);
        }
    }
}
