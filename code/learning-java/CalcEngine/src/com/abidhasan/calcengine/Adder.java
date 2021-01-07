package com.abidhasan.calcengine;

public class Adder extends CalculateBase implements MathProcessing {
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

    @Override
    public String getKeyword() {
        return "add";
    }

    @Override
    public char getSymbol() {
        return '+';
    }

    @Override
    public double doCalc(double leftVal, double rightVal) {

        return ;
    }
}
