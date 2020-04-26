package com.abidhasan.calcengine;

public class CalculateHelper {
    private static final char ADD_SYMBOL = '+';
    private static final char SUBTRACT_SYMBOL = '-';
    private static final char MULTIPLY_SYMBOL = '*';
    private static final char DIVIDE_SYMBOL = '/';

    MathCommand command;
    double leftVal, rightVal, result;

    public void process(String statement) {
        // "add 1.0 2.0" -> "1.0 + 2.0"
        String[] parts = statement.split(" ");

        leftVal = Double.parseDouble(parts[1]);
        rightVal = Double.parseDouble(parts[2]);

        String commandString = parts[0];
        setCommandFromString(commandString);

        CalculateBase calculator;
        switch(command) {
            case Add:
                calculator = new Adder(leftVal, rightVal);
                break;
            case Subtract:
                calculator = new Subtractor(leftVal, rightVal);
                break;
            case Multiply:
                calculator = new Multiplier(leftVal, rightVal);
                break;
            case Divide:
            default:
                calculator = new Divider(leftVal, rightVal);
                break;
        }

        result = calculator.doCalc();
    }

    @Override
    public String toString() {
        char opCode = ' ';
        switch(command) {
            case Add:
                opCode = ADD_SYMBOL;
                break;
            case Subtract:
                opCode = SUBTRACT_SYMBOL;
                break;
            case Divide:
                opCode = DIVIDE_SYMBOL;
                break;
            case Multiply:
                opCode = MULTIPLY_SYMBOL;
                break;
        }

        StringBuilder sb = new StringBuilder(20);
        sb.append(leftVal);
        sb.append(" ");
        sb.append(opCode);
        sb.append(" ");
        sb.append(rightVal);
        sb.append(" ");
        sb.append("= ");
        sb.append(result);
        return sb.toString();
    }

    private void setCommandFromString(String commandString) {
        // "add" -> MathCommand.Add
        if (commandString.equalsIgnoreCase(MathCommand.Add.toString())) {
            command = MathCommand.Add;
        } else if (commandString.equalsIgnoreCase(MathCommand.Subtract.toString())) {
            command = MathCommand.Subtract;
        } else if (commandString.equalsIgnoreCase(MathCommand.Multiply.toString())) {
            command = MathCommand.Multiply;
        } else if (commandString.equalsIgnoreCase(MathCommand.Divide.toString())) {
            command = MathCommand.Divide;
        }
    }
}
