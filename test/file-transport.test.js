import winston from "winston";

test("create new logger with console and file transport", () => {
  const logger = winston.createLogger({
    // menambahkan level sampai level tertentu
    level: "info",
    // console transport bertipe array berfungsi untuk mengirim transport ke beberapa logger
    //
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        // nama file
        filename: "application.log",
      }),
    ],
  });

  //   method log ke object logger
  logger.info({ message: "Hello World" });
  logger.info({ message: "Hello World" });
  logger.info({ message: "Hello World" });
  logger.info({ message: "Hello World" });
});
