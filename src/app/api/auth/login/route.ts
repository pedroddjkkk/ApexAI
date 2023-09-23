import { auth } from "@/auth/lucia";
import * as context from "next/headers";
import { NextResponse } from "next/server";
import { LuciaError } from "lucia";

import type { NextRequest } from "next/server";
import { loginSchema } from "@/lib/validations/user";
import { redirect } from "next/navigation";

export const POST = async (request: NextRequest) => {
  const formData = await request.formData();

  const validatedLoginInput = loginSchema.safeParse(formData);

  if (!validatedLoginInput.success) {
    return NextResponse.json(
      {
        error: validatedLoginInput.error.issues[0],
      },
      {
        status: 400,
      }
    );
  }

  try {
    const key = await auth.useKey(
      "username",
      validatedLoginInput.data.username.toLowerCase(),
      validatedLoginInput.data.password
    );

    const session = await auth.createSession({
      userId: key.userId,
      attributes: {},
    });

    const authRequest = auth.handleRequest(request.method, context);
    authRequest.setSession(session);

    redirect("/");
  } catch (e) {
    if (
      e instanceof LuciaError &&
      (e.message === "AUTH_INVALID_KEY_ID" ||
        e.message === "AUTH_INVALID_PASSWORD")
    ) {
      return NextResponse.json(
        {
          error: "Incorrect username or password",
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json(
      {
        error: "An unknown error occurred",
      },
      {
        status: 500,
      }
    );
  }
};
