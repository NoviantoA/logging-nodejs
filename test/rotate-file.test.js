import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("logging with daily rotate file", () => {
  const logger = winston.createLogger({
    // menambahkan level sampai level tertentu
    level: "info",
    // console transport bertipe array berfungsi untuk mengirim transport ke beberapa logger
    transports: [
      new winston.transports.Console({}),
      //   daily rotate file
      new DailyRotateFile({
        // nama file
        filename: "app-%DATE%.log",
        // file lama diarchive
        zippedArchive: true,
        // ukuran max file
        maxSize: "2m",
        // keep berapa lama
        maxFiles: "14d",
      }),
    ],
  });

  for (let i = 0; i < 10000; i++) {
    logger.info(`Hello World ${i}`);
  }
});
