class Solution {
    isValidSudoku(board) {
        // Traverse all rows
        for (let i = 0; i < 9; i++) {
            const seen = new Set();

            for (let j = 0; j < 9; j++) {
                const value = board[i][j];
                if (value === ".") continue;
                if (seen.has(value)) return false;

                seen.add(value);
            }
        }

        // Traverse all columns
        for (let i = 0; i < 9; i++) {
            const seen = new Set();

            for (let j = 0; j < 9; j++) {
                const value = board[j][i];
                if (value === ".") continue;
                if (seen.has(value)) return false;

                seen.add(value);
            }
        }

        // Traverse all 3*3 squares
        for (let row = 0; row < 9; row += 3) {
            for (let col = 0; col < 9; col += 3) {
                const seen = new Set();
                for (let i = row; i < row + 3; i++) {
                    for (let j = col; j < col + 3; j++) {
                        const value = board[i][j];
                        if (value === ".") continue;
                        if (seen.has(value)) return false;

                        seen.add(value);
                    }
                }
            }
        }

        return true;
    }
}
