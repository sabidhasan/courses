package com.abidhasan.calcengine;

public class Adder extends CalculateBase {
    public Adder() {}

    public Adder(double leftVal, double rightVal) {
        super(leftVal, rightVal);
    }

    @Override
    public double doCalc() {
         double result = getLeftVal() + getRightVal();
         setResult(result);
         return result;
    }
}
