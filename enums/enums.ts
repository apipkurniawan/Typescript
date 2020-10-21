// +, -, *, /, %, <<, >>, >>>, &, |, ^ binary operators with constant enum expressions
enum FileAccess {
    // constant members
    None,
    Read = 4 << 2,
    Ex = 2 % 9,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length
}

function tes(param: FileAccess) {
    return param;
}
console.log(tes(FileAccess.None));
console.log(tes(FileAccess.Read));
console.log(tes(FileAccess.Ex));
console.log(tes(FileAccess.Write));
console.log(tes(FileAccess.ReadWrite));
console.log(tes(FileAccess.G));



/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG
}
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log("Log level key is:", LogLevel.WARN);
        console.log("Log level key is:", LogLevel[1]);
        console.log("Log level key is:", key);
        console.log("Log level value is:", num);
        console.log("Log level message is:", message);
    }
}
printImportant("ERROR", "This is a message");



const enum Direction {
    Up,
    Down,
    Left,
    Right
}
let directions = [
    Direction.Up,
    Direction.Down,
    Direction.Left,
    Direction.Right
];
console.log(directions);