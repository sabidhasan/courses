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

    public void setLeftVal(double leftVal) {
        this.leftVal = leftVal;
    }

    public void setRightVal(double rightVal) {
        this.rightVal = rightVal;
    }

    public MathEquation(double leftVal, double rightVal, char opCode) {
        this.leftVal = leftVal;
        this.rightVal = rightVal;
        this.opCode = opCode;
    }

    public double doCalc(double leftVal, double rightVal) {
        // Overloaded version of doCalc that takes takes new values
        this.leftVal = leftVal;
        this.rightVal = rightVal;
        return doCalc();
    }

    public int doCalc(int leftVal, int rightVal) {
        // Overloaded version of doCalc that takes takes new values
        this.leftVal = leftVal;
        this.rightVal = rightVal;

        this.result = (int) doCalc();
        return (int) result;
    }

    public double doCalc() {
        switch (this.opCode) {
            case 'a':
                this.result = leftVal + rightVal;
                break;
            case 's':
                this.result = leftVal - rightVal;
                break;
            case 'd':
                this.result = leftVal / rightVal;
                break;
            case 'm':
                this.result = leftVal * rightVal;
                break;
            default:
                this.result = NaN;
                break;
        }

        return result;
    }
}
