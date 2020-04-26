package com.abidhasan.calcengine;

public class Main {
    public static void main(String[] args) {
        String[] calcStrings = {
                "divide 100.0 50.0",
                "add 225 11.0",
                "multiply 90.0 13.0",
                "subtract 10.0 50.0",
        };

        CalculateHelper helper = new CalculateHelper();

        for (String calcString : calcStrings) {
            helper.process(calcString);
            System.out.println(helper);
        }



//        CalculateBase[] calculators = {
//            new Adder(100.0d, 25.0d),
//            new Multiplier(225.0d, 11.0d),
//            new Divider(90.0d, 13.0d),
//            new Subtractor(25.0d, 2.0d),
//        };
//
//        for (CalculateBase calculator : calculators) {
//            calculator.doCalc();
//            System.out.println(calculator.getResult());
//        }
    }
}
