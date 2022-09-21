package com.techelevator;

import java.util.Scanner;

public class GameDemo {
    public static Scanner userInput = new Scanner(System.in);


    public static void main(String[] args) {
        GameDemo app = new GameDemo();
        System.out.println("Would you like to play 1 player or 2 player? (1P/2P)");
        String string = userInput.nextLine().toLowerCase();
        if (string.equals("1p")){
            app.runOne();
        }else if (string.equals("2p")){
            app.runTwo();
        }
    }

    public void runOne(){
        Board board = new Board();
        board.displayBoard();
        int x = 0;
        while (true) {
            playerOne(board);
            x++;
            if (checkWin(board)){
                System.out.println("Player One Wins!");
                break;
            }else if (x == 9) {
                System.out.println("Tie game!");
                break;
            }
            computerPlayer(board);
            x++;
            if (checkWin(board)){
                System.out.println("Computer Wins!");
                break;
            }

        }
        System.out.println("Game over!");
    }

    public void runTwo(){
        Board board = new Board();
        board.displayBoard();
        int x = 0;
        while (true) {
            playerOne(board);
            x++;
            if (checkWin(board)){
                System.out.println("Player One Wins!");
                break;
            }else if (x == 9) {
                System.out.println("Tie game!");
                break;
            }
            playerTwo(board);
            x++;
            if (checkWin(board)){
                System.out.println("Player Two Wins!");
                break;
            }

        }
        System.out.println("Game over!");

    }

    public static void playerOne(Board board) {
        board.makeMoveX(board);
        board.displayBoard();
    }

    public static void playerTwo(Board board){
        board.makeMoveO(board);
        board.displayBoard();
    }

    public static void computerPlayer(Board board){
        AIPlayer aiPlayer = new AIPlayer();
        String string = aiPlayer.decideMove(board);
        aiPlayer.makeAIMove(board, string);
        board.displayBoard();
    }

    public static boolean checkWin(Board board){
        if(GameDemo.checkRows(board)){
            return true;
        }else if (GameDemo.checkColumns(board)){
            return true;
        }else if (GameDemo.checkDiagonals(board)){
            return true;
        }
        return false;
    }
    public static boolean checkRows(Board board){
        if((board.getBoard().get("a1").equals("X") && board.getBoard().get("a2").equals("X") && board.getBoard().get("a3").equals("X"))
        || (board.getBoard().get("a1").equals("O") && board.getBoard().get("a2").equals("O") && board.getBoard().get("a3").equals("O"))) {
            return true;
        } else if ((board.getBoard().get("b1").equals("X") && board.getBoard().get("b2").equals("X") && board.getBoard().get("b3").equals("X"))
                || (board.getBoard().get("b1").equals("O") && board.getBoard().get("b2").equals("O") && board.getBoard().get("b3").equals("O"))) {
            return true;
        }else if ((board.getBoard().get("c1").equals("X") && board.getBoard().get("c2").equals("X") && board.getBoard().get("c3").equals("X"))
                || (board.getBoard().get("c1").equals("O") && board.getBoard().get("c2").equals("O") && board.getBoard().get("c3").equals("O"))) {
            return true;
        }
        return false;
    }
    public static boolean checkColumns(Board board){
        if ((board.getBoard().get("a1").equals("X") && board.getBoard().get("b1").equals("X") && board.getBoard().get("c1").equals("X"))
                || (board.getBoard().get("a1").equals("O") && board.getBoard().get("b1").equals("O") && board.getBoard().get("c1").equals("O"))) {
            return true;
        }else if ((board.getBoard().get("a2").equals("X") && board.getBoard().get("b2").equals("X") && board.getBoard().get("c2").equals("X"))
                || (board.getBoard().get("a2").equals("O") && board.getBoard().get("b2").equals("O") && board.getBoard().get("c2").equals("O"))) {
            return true;
        } else if ((board.getBoard().get("a3").equals("X") && board.getBoard().get("b3").equals("X") && board.getBoard().get("c3").equals("X"))
                || (board.getBoard().get("a3").equals("O") && board.getBoard().get("b3").equals("O") && board.getBoard().get("c3").equals("O"))) {
            return true;
        }
        return false;
    }
    public static boolean checkDiagonals(Board board){
        if ((board.getBoard().get("a1").equals("X") && board.getBoard().get("b2").equals("X") && board.getBoard().get("c3").equals("X"))
                || (board.getBoard().get("a1").equals("O") && board.getBoard().get("b2").equals("O") && board.getBoard().get("c3").equals("O"))) {
            return true;
        }else if ((board.getBoard().get("c1").equals("X") && board.getBoard().get("b2").equals("X") && board.getBoard().get("a3").equals("X"))
                || (board.getBoard().get("c1").equals("O") && board.getBoard().get("b2").equals("O") && board.getBoard().get("a3").equals("O"))) {
            return true;
        }
        return false;
    }
}
