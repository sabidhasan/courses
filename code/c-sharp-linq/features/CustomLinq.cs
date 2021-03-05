using System.Collections.Generic;

namespace Features.CustomLinq
{
    public static class MyLinq
    {
        public static int Count<T>(this IEnumerable<T> enumerable)
        {
            int count = 0;
            foreach (var item in enumerable)
            {
                count += 1;
            }

            return count;
        }
    }
}