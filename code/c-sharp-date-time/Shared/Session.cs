using System;

namespace Shared
{
    public class Session
    {
        public Session()
        {
            this.Id = Session.instanceCount.ToString();
            Session.instanceCount += 1;
        }

        private static int instanceCount = 0;

        public string Id { get; private set; } 
        public string Title { get; set; }
        public TimeSpan Length { get; set; }

        public DateTimeOffset EndTime {
            get
            {
                return this.StartTime.Add(this.Length);
            }
        }
        public DateTimeOffset StartTime { get; set; }
    }
}
