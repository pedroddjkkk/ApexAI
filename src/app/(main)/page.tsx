"use client";

import { useSession } from "@/lib/hooks/session";
import { useRouter } from "next/navigation";

import axios from "axios";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Card as TremorCard,
  Metric,
  Text,
  Flex,
  ProgressBar,
  Grid,
  Title,
  AreaChart,
} from "@tremor/react";

const data = [
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398,
  },
  // ...
  {
    Month: "Jan 22",
    Sales: 3890,
    Profit: 2980,
  },
];

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

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
                <TremorCard>
                  <Text>Sales</Text>
                  <Metric>$ 12,699</Metric>
                  <Flex className="mt-4">
                    <Text className="truncate">{`15.9% ($ 12,699)`}</Text>
                    <Text>$ 80,000</Text>
                  </Flex>
                  <ProgressBar value={15.9} className="mt-2" />
                </TremorCard>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="whatsapp" className="w-full h-full">
            <Card className="h-full w-full">
              <CardContent>
                <TremorCard>
                  <Title>Performance</Title>
                  <Text>Comparison between Sales and Profit</Text>
                  <AreaChart
                    className="mt-4 h-80"
                    data={data}
                    categories={["Sales", "Profit"]}
                    index="Month"
                    colors={["indigo", "fuchsia"]}
                    yAxisWidth={60}
                    valueFormatter={valueFormatter}
                  />
                </TremorCard>
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
