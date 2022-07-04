import winston from "winston";

test("create new logger with console transport", () => {
  const logger = winston.createLogger({
    // console transport bertipe array berfungsi untuk mengirim transport ke beberapa logger
    transports: [new winston.transports.Console({})],
  });

  //   method log ke object logger
  logger.log({
    level: "info",
    message: "Hello Logging",
  });
});
