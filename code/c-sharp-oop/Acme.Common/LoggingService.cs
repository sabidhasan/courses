using System.Collections.Generic;

namespace Acme.Common
{
    public static class LoggingService
    {
        public static void WriteLog(List<ILoggable> objects)
        {
            foreach (var o in objects)
            {
                System.Console.WriteLine(o.Log());
            }
        }
    }
}