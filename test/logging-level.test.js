import winston from "winston";

test("create new logger with console transport", () => {
  const logger = winston.createLogger({
    // menambahkan level sampai level tertentu
    level: "debug",
    // console transport bertipe array berfungsi untuk mengirim transport ke beberapa logger
    transports: [new winston.transports.Console({})],
  });

  //   method log ke object logger
  //   level logging dari yang  tinggi - rendah
  logger.log({ level: "error", message: "Hello Error" });
  logger.log({ level: "warn", message: "Hello Warn" });
  logger.log({ level: "info", message: "Hello Info" });
  logger.log({ level: "http", message: "Hello Http" });
  logger.log({ level: "verbose", message: "Hello Verbose" });
  logger.log({ level: "debug", message: "Hello Debug" });
  logger.log({ level: "silly", message: "Hello Silly" });
});
