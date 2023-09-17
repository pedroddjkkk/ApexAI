"use client";

import Form from "@/components/form";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { z } from "zod";

export default function Page() {
  const [error, setError] = useState<z.ZodIssue>();

  return (
    <main>
      <div className="flex justify-center items-center h-screen bg-blue-400">
        <Form action="/api/signup" onError={(error) => setError(error)}>
          <Card className="w-96">
            <CardHeader>
              <CardTitle>Registrar</CardTitle>
              <CardDescription>
                Realize o registro para acessar o sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="username">Nome de usuário</Label>
                  <Input
                    id="username"
                    name="username"
                    error={error?.path[0] === "username"}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    error={error?.path[0] === "email"}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    error={error?.path[0] === "password"}
                  />
                  {error?.path[0] === "password" && (
                    <Text>{error.message}</Text>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    error={error?.path[0] === "confirmPassword"}
                  />
                  {error?.path[0] === "confirmPassword" && (
                    <Text>As senhas não coincidem!</Text>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2">
              <Text>
                Já tem uma conta?{" "}
                <Link href="/login" className="text-blue-600">
                  Realize o Login!
                </Link>
              </Text>
              <Button variant="outline" className="self-end" type="submit">
                Registrar
              </Button>
            </CardFooter>
          </Card>
        </Form>
      </div>
    </main>
  );
}
