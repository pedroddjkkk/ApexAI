/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("./lucia.js").Auth;
  type DatabaseUserAttributes = {
    username: string;
    email: string;
    admin?: boolean;
  };
  type DatabaseSessionAttributes = {};
}
