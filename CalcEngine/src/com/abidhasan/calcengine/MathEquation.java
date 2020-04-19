package com.abidhasan.calcengine;

import static java.lang.Double.NaN;

public class MathEquation {
    public double leftVal;
    public double rightVal;
    public char opCode;
    public double result;

    public MathEquation(double leftVal, double rightVal, char opCode) {
        this.leftVal = leftVal;
        this.rightVal = rightVal;
        this.opCode = opCode;
    }

    public double doCalc() {
        switch (this.opCode) {
            case 'a':
                return leftVal + rightVal;
            case 's':
                return leftVal - rightVal;
            case 'd':
                return leftVal / rightVal;
            case 'm':
                return leftVal * rightVal;
            default:
                return NaN;
        }

    }

}
