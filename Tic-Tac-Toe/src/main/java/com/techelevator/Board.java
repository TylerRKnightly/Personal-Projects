package com.techelevator;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;


public class Board {
    private Map<String, String> board;


    public Board() {
        board = new HashMap<>();
        board.put("a1", " ");
        board.put("a2", " ");
        board.put("a3", " ");
        board.put("b1", " ");
        board.put("b2", " ");
        board.put("b3", " ");
        board.put("c1", " ");
        board.put("c2", " ");
        board.put("c3", " ");
    }

    public void displayBoard(){

        System.out.println("Current Board");
        System.out.println("     1    2     3");
        System.out.println("A  " + " " + board.get("a1") + "  |  " + board.get("a2") + "  |  " + board.get("a3"));
        System.out.println("   ---------------");
        System.out.println("B  " + " " + board.get("b1") + "  |  " + board.get("b2") + "  |  " + board.get("b3"));
        System.out.println("   ---------------");
        System.out.println("C  " + " " + board.get("c1") + "  |  " + board.get("c2") + "  |  " + board.get("c3"));

    }

    public Board makeMoveX(Board board){
        while (true) {
            System.out.println("");
            System.out.print("Please enter your move Player One: ");
            String string = userInput.nextLine().toLowerCase();
            if (board.getBoard().containsKey(string)) {
                if (board.getBoard().get(string).equals(" ")) {
                    board.getBoard().put(string, "X");
                    setBoard(board.getBoard());
                    return board;
                } else {
                    System.out.println("Invalid Move");
                }

            } else {
                System.out.println("Invalid Move");
            }
        }
    }

    public Board makeMoveO(Board board){
        while(true) {
            System.out.println("");
            System.out.print("Please enter your move Player Two: ");
            String string = userInput.nextLine().toLowerCase();
            if (board.getBoard().containsKey(string)) {
                if (board.getBoard().get(string).equals(" ")) {
                    board.getBoard().put(string, "O");
                    setBoard(board.getBoard());
                    return board;
                } else {
                    System.out.println("Invalid Move");
                }

            } else {
                System.out.println("Invalid Move");
            }
        }
    }

    public Map<String, String> getBoard() {
        return board;
    }

    public void setBoard(Map<String, String> board) {
        this.board = board;
    }

    public static Scanner userInput = new Scanner(System.in);
}
