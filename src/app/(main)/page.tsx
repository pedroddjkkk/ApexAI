"use client";

import { useSession } from "@/lib/hooks/session";
import { useRouter } from "next/navigation";

import axios from "axios";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  const { session, loading } = useSession();
  const router = useRouter();

  return (
    <main className="flex justify-center items-center h-screen">
      {loading ? (
        <h1>Carregando</h1>
      ) : (
        <Tabs defaultValue="account" className="w-[800px] h-[600px]">
          <TabsList>
            <TabsTrigger value="instagram">Instagram</TabsTrigger>
            <TabsTrigger value="whatsapp">Watizapi</TabsTrigger>
            <TabsTrigger value="facebook">Facebook</TabsTrigger>
            <TabsTrigger value="telegram">Telegram</TabsTrigger>
          </TabsList>
          <TabsContent value="instagram" className="w-full h-full">
            <Card className="h-full w-full">
              <CardContent>
                <p className="font-bold text-6xl">Instagram</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="whatsapp" className="w-full h-full">
            <Card className="h-full w-full">
              <CardContent>
                <p className="font-bold text-6xl">Watizap</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="facebook" className="w-full h-full">
            <Card className="h-full w-full">
              <CardContent>
                <p className="font-bold text-6xl">Facebook</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="telegram" className="w-full h-full">
            <Card className="h-full w-full">
              <CardContent>
                <p className="font-bold text-6xl">Telegram</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      )}
    </main>
  );
}
