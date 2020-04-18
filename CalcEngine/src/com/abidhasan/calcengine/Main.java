package com.abidhasan.calcengine;

import static java.lang.Double.NaN;

public class Main {
    public static double doCalc(char opCode, double val1, double val2) {
        switch (opCode) {
            case 'a':
                return val1 + val2;
            case 's':
                return val1 - val2;
            case 'd':
                return val1 / val2;
            case 'm':
                return val1 * val2;
            default:
                return NaN;
        }
    }

    public static void main(String[] args) {
        double[] leftVals = { 100.0d, 25.0d, 225.0d, 11.0d };
        double[] rightVals = { 90.0d, 15.0d, 25.0d, 2.0d };
        char[] opCodes = new char[] { 'a', 's', 'd', 'm' };
        double[] results = new double[leftVals.length];

        for (int i = 0; i < leftVals.length; i++) {
            char opCode = opCodes[i];
            double result = doCalc(opCode, leftVals[i], rightVals[i]);
            results[i] = result;
        }

        for (double result : results) {
            System.out.println("The result is " + result);
        }

    }
}
