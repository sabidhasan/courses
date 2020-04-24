package com.abidhasan.calcengine;

import com.abidhasan.calcengine.MathEquation;

public class Main {
    public static MathEquation[] doCalcs(double[] leftVals, double[] rightVals, char[] opCodes) {
        MathEquation[] ret = new MathEquation[leftVals.length];

        for (int i = 0; i < leftVals.length; i++) {
             ret[i] = new MathEquation(leftVals[i], rightVals[i], opCodes[i]);
        }

        return ret;
    }

    public static void main(String[] args) {
        double[] leftVals = { 100.0d, 25.0d, 225.0d, 11.0d };
        double[] rightVals = { 90.0d, 15.0d, 25.0d, 2.0d };
        char[] opCodes = { 'a', 's', 'd', 'm' };

        MathEquation[] results = doCalcs(leftVals, rightVals, opCodes);

        for (MathEquation result : results) {
            System.out.println("The result is " + result.doCalc());
        }
    }
}
