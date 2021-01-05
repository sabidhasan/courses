package com.abidhasan.calcengine;

public class Multiplier extends CalculateBase {
    public Multiplier() {}

    public Multiplier(double leftVal, double rightVal) {
        super(leftVal, rightVal);
    }

    @Override
    public double doCalc() {
        double result = getLeftVal() * getRightVal();
        setResult(result);
        return result;
    }

}
