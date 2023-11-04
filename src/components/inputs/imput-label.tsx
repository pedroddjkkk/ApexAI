import { Children } from "react"
import { Input } from "../ui/input"
import { Text } from "@tremor/react"

type InputLabelProps = {
  label: string
  description?: string
  children?: React.ReactNode
}
export function ImputLabel({
  label,
  description,
  children,
}: InputLabelProps) {
  return (
    <div className='flex flex-col gap-2'>
      <label className='font-bold text-neutrals-500' >{label}</label>
      {children}
      <Text>{description}</Text>
    </div>
  );
}