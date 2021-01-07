package com.abidhasan;

import javax.swing.*;
import java.awt.*;

public class Main {
    public static void main(String[] args) {
        JFrame application = createGUI();
        application.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        application.setVisible(true);
    }

    private static JFrame createGUI() {
        JTextField inputBox = new JTextField();
        Dimension standardDimension = new Dimension(300, 40);
        inputBox.setPreferredSize(standardDimension);

        JButton button = new JButton("Convert!");

        JLabel output = new JLabel();
        output.setPreferredSize(standardDimension);

        button.addActionListener(event -> {
            String newText = TitleCaseConverter.convertToTitleCase(inputBox.getText());
            output.setText(newText);
        });

        JFrame guiApp = new JFrame("Title Case Converter");
        guiApp.setLayout(new FlowLayout());
        guiApp.add(inputBox);
        guiApp.add(button);
        guiApp.add(output);
        guiApp.pack();
        guiApp.setLocationRelativeTo(null);
        return guiApp;
    }
}
