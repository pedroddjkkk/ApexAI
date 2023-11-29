import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

type Props = {
  children: React.ReactNode
  onChange: (e: any) => void
}

type Inputs = {
  question: string
  response: string
}

export function PopoverFormFaq({ children, onChange }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(z.object({
      question: z.string().nonempty("Campo obrigatório"),
      response: z.string().nonempty("Campo obrigatório"),
    })),
    defaultValues: {
      question: "",
      response: "",
    },
  });
  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <form className="p-4" >
          <Label className="mb-2">Pergunta</Label>
          <Input className="mb-4" name="question" />
          <Label className="mb-2">Pesposta</Label>
          <Input className="mb-4" name='response' />
          <Button className="w-full bg-success-500/90 hover:bg-success-500"
            onClick={(e) => {
              e.preventDefault()
              handleSubmit(onChange)
            }}
          >Salvar</Button>
        </form>
      </PopoverContent>
    </Popover>
  )
}