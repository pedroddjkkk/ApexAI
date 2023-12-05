"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Checkbox } from "../ui/checkbox";

type Props = {
  children: React.ReactNode
  onChange: (e: {
    quest: string
    response: string
    id: string
  }) => void
  open: boolean
  setOpen: (e: boolean) => void
  response: string
  setResponse: (e: string) => void
  quest: string
  setQuest: (e: string) => void
  questId?: string
  setQuestId: (e: string) => void
}

export function PopoverFormFaq({
  children,
  onChange,
  open,
  setOpen,
  response,
  setResponse,
  quest,
  setQuest,
  questId,
  setQuestId
}: Props) {

  const btn = cva(
    "w-full",
    {
      variants: {
        variant: {
          default: "bg-success-500/90 hover:bg-success-500",
          edit: "bg-blue-500 hover:bg-blue-700",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  )


  const [errors, setErrors] = useState("")

  const [id, setId] = useState(1)

  const [arquivoOpen, setArquivoOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={(e) => {
      if (!e) {
        setErrors('')
        setQuest('')
        setResponse('')
        setQuestId('')
      }
      setOpen(e)
    }}>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="p-4 flex flex-col" >
          <Label className="mb-2">Pergunta</Label>
          <Input className="mb-4" value={quest} onChange={(e) => setQuest(e.target.value)} />
          <Label className="mb-2">Resposta</Label>
          <Input className="mb-4" value={response} onChange={(e) => setResponse(e.target.value)} />
          <span className="text-red-500">{errors}</span>
          <div className="flex gap-2 mb-2 items-center">
            <Checkbox checked={arquivoOpen} onCheckedChange={(e) => setArquivoOpen(e as boolean)} />
            <Label>Arquivo</Label>
          </div>
          {arquivoOpen && <Input className="mb-4" type="file" onChange={(e) => {
            if (!e.target.files) return
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = () => {
              setResponse(reader.result as string)
            }
          }} />}
          <Button className={btn({ variant: questId ? "edit" : "default" })}
            onClick={() => {
              if (!quest) {
                setErrors("Pergunta é campo obrigatório")
                return
              }
              if (!response) {
                setErrors("Resposta é campo obrigatório")
                return
              }
              onChange({ quest, response, id: questId ? questId : id.toString() })
              setId(id + 1)
              setQuest('')
              setResponse('')
              setErrors('')
              setQuestId('')
              // fecha o popover do chadcn ui
              setOpen(false)
            }}
          >{
              questId ? "Editar" : "Adicionar"
            }</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}