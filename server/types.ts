import { ConsumeMessage, Message } from "amqplib";

export type EmailOptions = {
  SUBJECT: string;
  BODY: string;
  SEND_TO: string;
  SENT_FROM: string;
  REPLY_TO: string;
};

export type passwordResetType = {
  username: string;
  url: string;
};

export type resetSuccessType = {
  username: string | undefined;
};

export type ResponseArgs = {
  channel: any;
  queueName: string;
  consumerTag: string | undefined;
};

export type SendResponseArgs = {
  channel: any;
  queueName: string;
  success: boolean;
  message: string;
};

export type QueueMessage = ConsumeMessage | Message | null;
