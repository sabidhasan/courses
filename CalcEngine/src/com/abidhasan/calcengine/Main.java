package com.abidhasan.calcengine;

public class Main {
    public static void main(String[] args) {
        String[] calcStrings = {
            "divide 100.0 50.0",
            "add 225 11.0",
            "multiply 90.0 13.0",
            "subtract 10.0 50.0",
            "fkjf 4.0 13.0",
            "add 13.0",
            "add aldo 13.0",
        };

        CalculateHelper helper = new CalculateHelper();

        for (String calcString : calcStrings) {
            try {
                helper.process(calcString);
                System.out.println(helper);
            } catch(InvalidStatementException e) {
                System.out.println("Cannot process statement: " + e.getMessage());
            }
        }
    }
}
