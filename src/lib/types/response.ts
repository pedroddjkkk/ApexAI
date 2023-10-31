export type WebhookResponse = {
  type: "message" | "message_create";
} & {
  [key: string]: Record<string, any>;
};
