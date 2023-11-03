import { Input } from "../ui/input"
import { Text } from "@tremor/react"

type InputLabelProps = {
  name: string
  label: string
  value: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  description?: string
}
export function ImputLabel({
  name,
  label,
  value,
  onChange,
  placeholder,
  type,
  description
}: InputLabelProps) {
  return (
    <div className='flex flex-col gap-2'>
      <label className='font-bold text-neutrals-500' >{label}</label>
      <Input name={name} value={value} type={type} placeholder={placeholder} onChange={(e) => onChange && onChange(e)} />
      <Text>{description}</Text>
    </div>
  );
}