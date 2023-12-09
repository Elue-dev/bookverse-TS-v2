import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { consumeFromRabbitMQAndSendRPasswordEmail } from "./rabbitmq/reset.password.publisher";
import { consumeFromRabbitMQAndSendEmail } from "./rabbitmq/email.publisher";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 9090;

app.get("/healthz", function (req: Request, res: Response) {
  res.status(200).json({
    message: "Node server healthy ✅",
  });
});

app.listen(PORT, function () {
  console.log(`Nodejs server listening on port ${PORT}`);
  consumeFromRabbitMQAndSendEmail("WELCOME_USER_QUEUE");
  consumeFromRabbitMQAndSendEmail("FORGOT_PASSWORD_QUEUE");
  consumeFromRabbitMQAndSendEmail("RESET_PASSWORD_QUEUE");
});
