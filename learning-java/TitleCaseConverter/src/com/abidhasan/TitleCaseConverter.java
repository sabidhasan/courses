package com.abidhasan;

public class TitleCaseConverter {
    final static int MAX_LENGTH_FOR_SHORT_WORD = 4;

    public static String convertToTitleCase(String input) {
        // Converts to title case
        StringBuilder stringBuilder = new StringBuilder();
        for (String word: input.split("\\s")) {
            if (word.length() < MAX_LENGTH_FOR_SHORT_WORD) {
                stringBuilder.append(word.toLowerCase());
            } else {
                stringBuilder.append(word.substring(0, 1).toUpperCase());
                stringBuilder.append(word.substring(1).toLowerCase());
            }

            stringBuilder.append(" ");
        }

        return stringBuilder.toString();
    }
}
