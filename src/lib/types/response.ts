export type WebhookResponse = {
  type: "message" | "message_create" | "qrcode" | "ready";
} & {
  [key: string]: any;
};
