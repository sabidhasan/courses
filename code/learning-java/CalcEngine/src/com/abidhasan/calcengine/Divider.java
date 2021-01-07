package com.abidhasan.calcengine;

public class Divider extends CalculateBase {
    public Divider() {}

    public Divider(double leftVal, double rightVal) {
        super(leftVal, rightVal);
    }

    @Override
    public double doCalc() {
        double result = getLeftVal() / getRightVal();
        setResult(result);
        return result;
    }
}
