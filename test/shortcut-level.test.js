import winston from "winston";

test("logging with shortcut level function", () => {
  const logger = winston.createLogger({
    // menambahkan level sampai level tertentu
    level: "silly",
    // console transport bertipe array berfungsi untuk mengirim transport ke beberapa logger
    transports: [new winston.transports.Console({})],
  });

  //   method log ke object logger
  //   shortcut level yang  tinggi - rendah
  logger.error({ message: "Hello Error" });
  logger.warn({ message: "Hello Warn" });
  logger.info({ message: "Hello Info" });
  logger.log({ message: "Hello Http" });
  logger.http({ message: "Hello Verbose" });
  logger.debug({ message: "Hello Debug" });
  logger.silly({ message: "Hello Silly" });
});
