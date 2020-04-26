package com.abidhasan.calcengine;

public class Main {
    public static void main(String[] args) {
        CalculateBase[] calculators = {
            new Adder(100.0d, 25.0d),
            new Multiplier(225.0d, 11.0d),
            new Divider(90.0d, 13.0d),
            new Subtractor(25.0d, 2.0d),
        };

        for (CalculateBase calculator : calculators) {
            calculator.doCalc();
            System.out.println(calculator.getResult());
        }
    }
}
