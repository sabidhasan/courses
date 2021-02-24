using System.Collections.Generic;

namespace ACM.BL
{
    public abstract class BaseRepository
    {
        public virtual bool Save(EntityClass target)
        {
            if (!target.HasChanges)
            {
                System.Console.WriteLine("No changes!");
                return false;
            }
            else if (!target.IsValid)
            {
                System.Console.WriteLine("Is not valid!");
                return false;
            }

            return true;
        }

        public abstract IEnumerable<EntityClass> Retrieve();

        public abstract EntityClass Retrieve(string id);
    }
}
