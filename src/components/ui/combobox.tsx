"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type PropTypes = {
  options: {
    value: string
    label: string
  }[],
  onSelect: (value: string) => void
  placeholder?: string
}

export function Combobox({
  options,
  onSelect,
  placeholder
}: PropTypes) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? options.find((opition) => opition.value === value)?.label
            : placeholder || "Select..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder={placeholder || "Select..."} />
          <CommandEmpty>Não encontrado.</CommandEmpty>
          <CommandGroup>
            {options.map((opition) => (
              <CommandItem
                key={opition.value}
                value={opition.value}
                onSelect={(currentValue) => {
                  onSelect(currentValue)
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === opition.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {opition.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
