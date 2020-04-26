package com.abidhasan.calcengine;

public class Subtractor extends CalculateBase {
    public Subtractor() {}

    public Subtractor(double leftVal, double rightVal) {
        super(leftVal, rightVal);
    }

    @Override
    public double doCalc() {
        double result = getLeftVal() - getRightVal();
        setResult(result);
        return result;
    }
}
