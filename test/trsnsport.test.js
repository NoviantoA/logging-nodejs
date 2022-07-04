import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import TransportStream from "winston-transport";

test("create new transport", () => {
  class MyTransport extends TransportStream {
    constructor(option) {
      super(option);
    }
    log(info, next) {
      console.log(
        `${new Date()} : ${info.level.toUpperCase()}: ${info.message}`
      );
      next();
    }
  }
  const logger = winston.createLogger({
    level: "silly",
    transports: [new MyTransport({})],
  });
  logger.error({ message: "Hello Error" });
  logger.warn({ message: "Hello Warn" });
  logger.info({ message: "Hello Info" });
  logger.log({ message: "Hello Http" });
  logger.http({ message: "Hello Verbose" });
  logger.debug({ message: "Hello Debug" });
  logger.silly({ message: "Hello Silly" });
});
