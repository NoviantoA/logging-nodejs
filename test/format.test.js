import winston from "winston";

test("logging with format", () => {
  const logger = winston.createLogger({
    level: "info",
    // default format bawaan winston yaitu json
    // format: winston.format.json(),
    // format: winston.format.logstash,
    format: winston.format.simple(),
    transports: [new winston.transports.Console({})],
  });

  logger.info("Hello World");
});
