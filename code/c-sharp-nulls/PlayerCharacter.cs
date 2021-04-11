using System;

namespace c_sharp_nulls
{
    public class PlayerCharacter
    {
        public string Name { get; set; }
        public Nullable<int> DaysSinceLastLogin { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public bool? IsNew { get; set; }
        public int Health { get; private set; } = 100;
        private readonly SpecialDefence defence;

        public PlayerCharacter(string name, SpecialDefence defence)
        {
            Name = name;
            this.defence = defence;
        }

        public void TakeDamage()
        {
            int damageReduction = defence.CalculateDamageReduction();
            if ((Health - damageReduction) > 0)
            {
                Health -= damageReduction;
            }
            else
            {
                System.Console.WriteLine("Player has died");
            }
        }
    }
}