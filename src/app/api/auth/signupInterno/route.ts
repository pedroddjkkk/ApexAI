import { auth } from "@/auth/lucia";
import { isRedirectError } from "@/lib/utils";
import { createUserSchema } from "@/lib/validations/user";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";


export const POST = async (request: Request) => {

  const body = await request.json();

  const validatedUserInput = createUserSchema.safeParse({
    username: body.username,
    password: body.password,
    email: body.email,
    confirmPassword: body.confirmPassword,
    company_id: body.company_id,
    role_id: body.role_id
  });

  if (!validatedUserInput.success) {
    return NextResponse.json(
      {
        field: validatedUserInput.error.issues[0].path[0],
        message: validatedUserInput.error.issues[0].message,
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
        role_id: validatedUserInput.data.role_id,
        company_id: validatedUserInput.data.company_id,
      },
    });
    return NextResponse.json({ user });
  } catch (e) {
    console.log("e", e);
    if (isRedirectError(e)) throw e;
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code === "P2002"
    ) {
      console.log("e", e);
      if (e.meta?.target === "PRIMARY") {
        console.log("Primary", e);
        return NextResponse.json(
          {
            message: "Nome de usuário já está em uso",
            field: "username",
          }
        );
      } else if (e.meta?.target === "User_email_key") {
        console.log("User_email_key", e);
        return NextResponse.json(
          {
            message: "Email já está em uso",
            field: "email",
          }
        );
      }
    }

    return NextResponse.json(
      {
        error: "An unknown error occurred",
      }
    );
  }
};
