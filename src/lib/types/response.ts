export type WebhookResponse = {
  type: "message" | "message_create" | "qrcode";
} & {
  [key: string]: any;
};
