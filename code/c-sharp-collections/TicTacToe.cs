#nullable enable

using System;
using System.Text;

namespace c_sharp_collections
{
    public class TicTacToe
    {
        public TicTacToe()
        {
            Board board = new Board();
            System.Console.WriteLine(board.ToString());
            ReplGame(board);
        }

        private static void ReplGame(Board board)
        {
            bool playerOneActive = true;
            while (true)
            {
                int position = -1;
                while (true)
                {
                    System.Console.WriteLine($"Player {(playerOneActive ? '1' : '2')}'s turn. Which position (1-9)?");
                    bool validInput = int.TryParse(System.Console.ReadLine(), out position);
                    bool positionIsValid = board.PositionIsValid(position - 1);
                    if (positionIsValid && validInput)
                    {
                        break;
                    }
                    else
                    {
                        System.Console.WriteLine("Position is not valid");
                    }
                }

                // Update board
                var squareOwner = playerOneActive ? SquareOwner.PLAYER_1 : SquareOwner.PLAYER_2;
                board.Play(position - 1, squareOwner);
                System.Console.WriteLine(board.ToString());
                playerOneActive = !playerOneActive;
            }
        }
    }

    public class Board
    {
        private Square[][] board;
        public Board()
        {
            Square[][] _board = {
                new Square[3],
                new Square[3],
                new Square[3],
            };

            for (var i = 0; i < 3; i++)
            {
                // _board[i] = new Square[3];
                for (var j = 0; j < 3; j++)
                {
                    var m = _board[i];
                    var n = _board[i][j];
                    _board[i][j] = new Square();
                }
            }

            this.board = _board;
        }

        public bool PositionIsValid(int position)
        {
            double rowPosition = position / 3;
            int row = (int)Math.Floor(rowPosition);
            int col = position % 3;
            return (position >= 0 && position <=8 && board[row][col].owner == SquareOwner.UNOWNED);
        }

        public void Play(int position, SquareOwner player)
        {
            if (!PositionIsValid(position)) throw new Exception("Invalid position");

            double rowPosition = position / 3;
            int row = (int)Math.Floor(rowPosition);
            int col = position % 3;

            this.board[row][col].owner = player;
        }

        public override string ToString()
        {
            var s = new StringBuilder();

            foreach (var row in board) {
                s.Append("|") ;
                foreach (var square in row)
                {

                    s.Append(square.ToString());
                    s.Append("|"); //+= square.ToString() + "|"; // Append(new[] { " ", square.ToString() });
                }

                s.Append(Environment.NewLine); // += Environment.NewLine; //Append("\n");
            }

            return s.ToString();
        }
    }


    public enum SquareOwner {
        UNOWNED,
        PLAYER_1,
        PLAYER_2,
    };

    public class Square
    {
        private SquareOwner _owner;
        public SquareOwner owner
        {
            get
            {
                return this._owner;
            }
            set
            {
                if (_owner != SquareOwner.UNOWNED)
                    throw new System.ArgumentException("Cannot reassign a previously assigned spot");
            
                _owner = value;
            }
        }

        public Square()
        {
            owner = SquareOwner.UNOWNED;
        }

        public override string ToString()
        {
            switch(owner)
            {
                case SquareOwner.PLAYER_1:
                    return "X";
                case SquareOwner.PLAYER_2:
                    return "O";
                case SquareOwner.UNOWNED:
                default:
                    return " ";
            }
        }
    }
}