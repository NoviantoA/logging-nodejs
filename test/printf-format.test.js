import winston from "winston";

test("logging with printf format", () => {
  const logger = winston.createLogger({
    // menambahkan level sampai level tertentu
    level: "info",
    // printf format
    format: winston.format.printf((info) => {
      return `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`;
    }),
    // console transport bertipe array berfungsi untuk mengirim transport ke beberapa logger
    transports: [new winston.transports.Console({})],
  });

  //   method log ke object logger
  logger.info({ message: "Hello Format" });
});
