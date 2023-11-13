import { useState } from "react";
import { Tabs, TabsContent, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { Title } from "@tremor/react";
import { Textarea } from "../ui/textarea";

const quests = [
  {
    id: 'produtos',
    quest: 'Quais são os principais produtos ou serviços oferecidos pela empresa?'
  },
  {
    id: 'horario',
    quest: 'Horário de atendimento?'
  },
  {
    id: 'contato',
    quest: 'Como entrar em contato com a empresa?'
  },
  {
    id: 'localizacao',
    quest: 'Endereço da empresa?'
  },
  {
    id: 'sobre',
    quest: 'Sobre a empresa?'
  },
  {
    id: 'missao',
    quest: 'Qual a missão da empresa?'
  },
  {
    id: 'visao',
    quest: 'Qual a visão da empresa?'
  },
  {
    id: 'valores',
    quest: 'Quais são os valores da empresa?'
  },
];

type Props = {
  onChange: (value: string, quest: {
    id: string;
    quest: string;
  }) => void;
  value: {
    id: string;
    quest: string;
    response: string;
  }[]
}

export default function TabsForm({ onChange, value }: Props) {

  const [activeTab, setActiveTab] = useState(quests[0].id);

  return (
    <form>
      <Tabs defaultValue={quests[0].id} className="w-full" value={activeTab} >
        {quests.map((quest, index) => (
          <TabsContent value={quest.id} key={index}>
            <div className="flex flex-col gap-2">
              <Title>{quest.quest}</Title>
              <Textarea className="w-full h-[150px]" onChange={(e) => {
                onChange(e.target.value, quest)
              }} value={value?.find((item) => item.id === quest.id)?.response} />
              <div className="flex gap-2">
                {index > 0 &&
                  <Button onClick={(e) => {
                    e.preventDefault()
                    setActiveTab(quests[index - 1].id)
                  }}>Voltar</Button>}
                {index < quests.length - 1 &&
                  <Button onClick={(e) => setActiveTab(quests[index + 1].id)}>Próximo</Button>}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </form>
  )
}