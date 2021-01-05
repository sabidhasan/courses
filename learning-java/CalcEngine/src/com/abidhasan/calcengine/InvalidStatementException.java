package com.abidhasan.calcengine;

public class InvalidStatementException extends Exception {
    public InvalidStatementException(String invalidReason, String statement) {
        super(invalidReason + " - " + statement);
    }

    public InvalidStatementException(String invalidReason, String statement, Throwable cause) {
        super(invalidReason + " - " + statement, cause);
    }
}
