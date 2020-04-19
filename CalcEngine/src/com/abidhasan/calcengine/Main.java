package com.abidhasan.calcengine;

import com.abidhasan.calcengine.MathEquation;

public class Main {
    public static double[] doCalcs(double[] leftVals, double[] rightVals, char[] opCodes) {
        double[] ret = new double[leftVals.length];

        for (int i = 0; i < leftVals.length; i++) {
            double leftVal = leftVals[i];
            double rightVal = rightVals[i];
            char opCode = opCodes[i];
            ret[i] = new MathEquation(leftVal, rightVal, opCode).doCalc();
        }

        return ret;
    }

    public static void main(String[] args) {
        double[] leftVals = { 100.0d, 25.0d, 225.0d, 11.0d };
        double[] rightVals = { 90.0d, 15.0d, 25.0d, 2.0d };
        char[] opCodes = { 'a', 's', 'd', 'm' };

        double[] results = doCalcs(leftVals, rightVals, opCodes);

        for (double result : results) {
            System.out.println("The result is " + result);
        }
    }
}
