import winston from "winston";

test("logging with combine format", () => {
  const logger = winston.createLogger({
    // menambahkan level sampai level tertentu
    level: "info",
    format: winston.format.combine(
      // menyisipkan timestamp
      winston.format.timestamp(),
      // jarak waktu log sebelumnya dengan log yang akan dieksekusi
      winston.format.ms(),
      // menentukan tipe format
      winston.format.json()
    ),
    // console transport bertipe array berfungsi untuk mengirim transport ke beberapa logger
    transports: [new winston.transports.Console({})],
  });

  //   method log ke object logger
  logger.info({ message: "Hello Format" });
  logger.warn({ message: "Hello Format" });
  logger.error({ message: "Hello Format" });
});
