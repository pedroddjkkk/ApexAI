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
import { Label } from "@/components/ui/label";
import { Text } from "@/components/ui/text";
import Link from "next/link";

export default function Login() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen bg-blue-400">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Insiria seu email e sua senha para continuar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input id="password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2">
            <Text>
              Não tem um conta? <Link href="/registrar" className="text-blue-600">Registre-se!</Link>
            </Text>
            <Button variant="outline" className="self-end">Entrar</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
