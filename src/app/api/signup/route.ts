import { auth } from "@/auth/lucia";
import { createUserSchema } from "@/lib/validations/user";
import { Prisma } from "@prisma/client";
import * as context from "next/headers";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  const email = formData.get("email");

  const validatedUserInput = createUserSchema.safeParse({
    username,
    password,
    email,
  });

  if (!validatedUserInput.success) {
    return NextResponse.json(
      {
        error: validatedUserInput.error.issues[0].message,
      },
      {
        status: 400,
      }
    );
  }

  try {
    const user = await auth.createUser({
      key: {
        providerId: "username",
        providerUserId: validatedUserInput.data.username.toLowerCase(),
        password: validatedUserInput.data.password,
      },
      attributes: {
        username: validatedUserInput.data.username,
        email: validatedUserInput.data.email,
      },
    });
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    });
    const authRequest = auth.handleRequest(request.method, context);
    authRequest.setSession(session);
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  } catch (e) {
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code === "P2002"
    ) {
      return NextResponse.json(
        {
          error: "Username already taken",
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
