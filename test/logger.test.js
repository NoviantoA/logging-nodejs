import winston from "winston";

test("create new logger", () => {
  const logger = winston.createLogger({});

  //   method log ke object logger
  logger.log({
    level: "info",
    message: "Hello Logging",
  });
});
