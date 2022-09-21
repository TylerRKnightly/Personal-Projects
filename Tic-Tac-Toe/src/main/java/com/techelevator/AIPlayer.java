package com.techelevator;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class AIPlayer {

    public String decideMove(Board board){
        List<String> keysArray = new ArrayList<String>(board.getBoard().keySet());
        Random random = new Random();
        while (true){
            String string = keysArray.get(random.nextInt(keysArray.size()));
            if (board.getBoard().get(string).equals(" ")){
                return string;
            }
        }
    }

    public Board makeAIMove(Board board, String string){
        while(true) {
            if (board.getBoard().containsKey(string)) {
                if (board.getBoard().get(string).equals(" ")) {
                    board.getBoard().put(string, "O");
                    board.setBoard(board.getBoard());
                    return board;
                } else {
                    System.out.println("Invalid Move");
                    System.out.println(string);
                }

            } else {
                System.out.println("Invalid Move");
                System.out.println(string);
            }
        }
    }
}
