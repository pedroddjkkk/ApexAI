/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("./lucia.js").Auth;
  type DatabaseUserAttributes = {
    username: string;
    email: string;
    role_id?: string;
    company_id?: string;
  };
  type DatabaseSessionAttributes = {};
}
