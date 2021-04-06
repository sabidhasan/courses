using System;

namespace c_sharp_nulls
{
    public class PlayerCharacter
    {
        public string Name { get; set; }
        public Nullable<int> DaysSinceLastLogin { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public bool? IsNew { get; set; }

        public PlayerCharacter(string name)
        {
            Name = name;
        }
    }
}