package com.abidhasan.calcengine;

public interface MathProcessing {
    String SEPARATOR = " ";

    String getKeyword();
    char getSymbol();
    double doCalc(double leftVal, double rightVal);
}
