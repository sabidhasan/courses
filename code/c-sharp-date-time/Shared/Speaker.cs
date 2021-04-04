using System;
using System.Collections.Generic;

namespace Shared
{
    public class Speaker
    {
        public string Name { get; set; }
        public DateTime Birthday { get; set; }
        public List<Session> Sessions { get; set; }

        public override string ToString()
        {
            return Name;
        }
    }
}
