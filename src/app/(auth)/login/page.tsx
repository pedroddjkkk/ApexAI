"use client";

import Form from "@/components/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { InputPassword } from "@/components/ui/input-password";
import { Label } from "@/components/ui/label";
import { Text } from "@/components/ui/text";
import { useSession } from "@/lib/hooks/session";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { RiArrowGoBackLine } from "react-icons/ri";

export default function Login() {
  const [error, setError] = useState<{ field: string; message: string }>();

  const router = useRouter();

  return (
    <main>
      <div className="flex justify-center items-center h-screen bg-blue-400">
        <Form
          action="/api/auth/login"
          onError={(error) => setError(error)}
          onSucces={() => {
            console.log("sucesso");
            router.push("/dashboard")
          }}
        >
          <Card className="w-96">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Insiria seu email e sua senha para continuar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="username">Nome de usuário</Label>
                  <Input
                    id="username"
                    name="username"
                    error={error?.field === "username"}
                  />
                  {error?.field === "username" && <Text>{error.message}</Text>}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="password">Senha</Label>
                  <InputPassword
                    id="password"
                    name="password"
                    type="password"
                    error={error?.field === "password"}
                  />
                  {error?.field === "password" && (
                    <Text className="break-words">{error.message}</Text>
                  )}
                </div>
                {error?.field === "login" && (
                  <Text className="text-red-500">{error.message}</Text>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2">
              <Text>
                Não tem um conta?{" "}
                <Link href="/registrar" className="text-blue-600">
                  Registre-se!
                </Link>
              </Text>
              <div className="flex justify-between flex-row-reverse w-full">
                <Button variant="outline" className="self-end" type="submit">
                  Entrar
                </Button>
                <Button variant="outline" className="self-end"
                  onClick={() => {
                    router.back();
                  }}
                >
                  <RiArrowGoBackLine className="mr-2" />
                  Voltar
                </Button>
              </div>
            </CardFooter>
          </Card>
        </Form>
      </div>
    </main>
  );
}
