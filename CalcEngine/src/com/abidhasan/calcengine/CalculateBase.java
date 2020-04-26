package com.abidhasan.calcengine;

public abstract class CalculateBase {
    // Common point of inheritance for all calculation classes
    private double leftVal, rightVal, result;

    public double getResult() {
        return result;
    }

    public double getLeftVal() {
        return leftVal;
    }

    public double getRightVal() {
        return rightVal;
    }

    public void setLeftVal(double leftVal) {
        this.leftVal = leftVal;
    }

    public void setRightVal(double rightVal) {
        this.rightVal = rightVal;
    }

    public void setResult(double result) {
        this.result = result;
    }

    public CalculateBase() { }

    public CalculateBase(double leftVal, double rightVal) {
        this.leftVal = leftVal;
        this.rightVal = rightVal;
    }

    public abstract double doCalc();
}
