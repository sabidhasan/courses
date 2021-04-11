namespace c_sharp_nulls
{
    class PlayerDisplayer
    {
        public static void Display(PlayerCharacter? player)
        {
            if (player == null)
            {
                System.Console.WriteLine("Player is null");
                return;
            }

            if (string.IsNullOrEmpty(player.Name))
            {
                System.Console.WriteLine("Empty name");
            } else
            {
                System.Console.WriteLine(player.Name);
            }

            if (player.DateOfBirth.HasValue)
            {
                System.Console.WriteLine(player.DateOfBirth);
            }

            if (player.DaysSinceLastLogin.HasValue)
            {
                System.Console.WriteLine(player.DaysSinceLastLogin);
            }

            if (player.IsNew == null)
            {
                System.Console.WriteLine("New status unknown");
            }
            else if (player.IsNew == false)
            {
                System.Console.WriteLine("Player is not new");
            }
            else
            {
                System.Console.WriteLine("Player is new");
            }

            System.Console.WriteLine($"Player has #{player.Health} health");
        }
    }
}
