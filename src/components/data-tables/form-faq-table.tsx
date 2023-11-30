import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PopoverFormFaq } from "@/components/form/popoverFormFaq";
import { MdOutlineEdit } from "react-icons/md";
import { type } from 'os';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { InputsAionfig } from '@/sections/ai-config-register-view';

type Props = {
  watch: UseFormWatch<InputsAionfig>
  setValue: UseFormSetValue<InputsAionfig>
}

export default function FacDataTables({
  watch,
  setValue
}: Props) {

  const [open, setOpen] = useState(false)

  const [response, setResponse] = useState('')
  const [quest, setQuest] = useState('')
  const [questId, setQuestId] = useState('')
  const [pgFaq, setPgFaq] = useState(0);

  return (
    <div className="border-input border-[1px] rounded-lg p-6 gap-4 flex flex-col">
      <div className="gap-4 flex">
        <PopoverFormFaq
          open={open}
          setOpen={setOpen}
          response={response}
          setResponse={setResponse}
          quest={quest}
          setQuest={setQuest}
          questId={questId}
          setQuestId={setQuestId}
          onChange={(e) => {
            // adiciona a pergunta e resposta no array
            if (watch("faq").find((item) => item.id === questId)) {
              const index = watch("faq").findIndex((item) => item.id === questId)
              const newFaq = [...watch("faq")]
              newFaq[index] = {
                id: questId,
                quest: quest,
                response: response
              }
              setValue("faq", newFaq)
              return
            }
            setValue("faq", [...watch("faq"), e]);
          }}
        >
          <Button
            className="gap-2 font-bold bg-success-500/90 hover:bg-success-500">
            <BsPlusLg size={20} />
            Adicionar FAQ
          </Button>
        </PopoverFormFaq>
      </div>
      <div className="rounded-t-lg border-input border-[1px] ">
        <Table >
          <TableHeader>
            <TableRow>
              <TableHead className='lg:min-w-[300px] md:min-w-[300px] min-w-[0px]'>Perguntas</TableHead>
              <TableHead>Respostas</TableHead>
              <TableHead className="w-[140px] text-center">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {watch("faq")
              .slice(pgFaq, pgFaq + 5)
              .map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {item.quest}
                  </TableCell>
                  <TableCell>
                    {item.response}
                  </TableCell>
                  <TableCell className="flex gap-1">
                    <Button className="bg-red-500 hover:bg-red-700" onClick={(e) => {
                      e.preventDefault()
                      setValue('faq', watch('faq').filter((itemFaq) => itemFaq.id !== item.id))
                    }}>
                      <AiOutlineDelete size={20} />
                    </Button>
                    <Button className="bg-blue-500 hover:bg-blue-700"
                      onClick={(e) => {
                        e.preventDefault()
                        setQuest(item.quest)
                        setResponse(item.response)
                        setQuestId(item.id)
                        setOpen(true)
                      }}
                    >
                      <MdOutlineEdit size={20} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-end items-center gap-2">
        <Button className="bg-transparent text-neutrals-500 hover:bg-black/5 rounded-full p-2 w-[40px] h-[40px]"
          onClick={(e) => {
            e.preventDefault();
            if (pgFaq > 0) {
              setPgFaq(pgFaq - 5);
            }
          }}
        >
          <FaChevronLeft size={20} />
        </Button>
        <div>
          <span className="text-neutrals-500">
            {/* 1 - 5 de 9 */}
            {pgFaq + 1} - {pgFaq + 5} de {watch("faq").length}
          </span>
        </div>
        <Button className="bg-transparent text-neutrals-500 hover:bg-black/5 rounded-full p-2 w-[40px] h-[40px]"
          onClick={(e) => {
            e.preventDefault();
            if (pgFaq < watch("faq").length) {
              setPgFaq(pgFaq + 5);
            }
          }}
        >
          <FaChevronRight size={20} />
        </Button>
      </div>
    </div>
  )
}