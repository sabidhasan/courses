package com.abidhasan.calcengine;

import static java.lang.Double.NaN;

public class MathEquation {
    private double leftVal, rightVal, result;
    private char opCode;

    public MathEquation() {
        // If class is instantiated with nothing, default to basic params
        this(0.0d, 0.0d, 'a');
    }

    public MathEquation(char opCode) {
        this(0.0d, 0.0d, opCode);
    }

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
