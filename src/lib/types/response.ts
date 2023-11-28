export type WebhookResponse = {
  type: "message" | "message_create" | "qrcode";
} & {
  [key: string]: Record<string, any>;
};
