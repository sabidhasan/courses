namespace ACM.BL
{
    public enum DeletionState
    {
        ACTIVE,
        DELETED
    }

    public abstract class EntityClass
    {
        public bool IsNew { get; set; }
        public bool HasChanges { get; protected set; }
        public bool IsValid { get => Validate(); }
        public DeletionState IsDeleted { get; set; }

        public abstract bool Validate();
    }
}