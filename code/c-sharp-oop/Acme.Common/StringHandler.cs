using System;

namespace Acme.Common
{
    public static class StringHandler
    {
        public static string InsertSpaces(this string source)
        {
            var result = String.Empty;

            if (String.IsNullOrEmpty(source))
            {
                return result;
            }

            foreach (char letter in source)
            {

                if (char.IsUpper(letter))
                {
                    result = result.Trim() + " ";
                }

                result = result + letter;
            }

            return result.Trim();
        }
    }
}
