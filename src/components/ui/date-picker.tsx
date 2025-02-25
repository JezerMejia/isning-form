import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  value?: Date;
  onValueChange?: (value: Date | undefined) => void;
}

export default function DatePicker({ value, onValueChange }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? (
            format(value, "PP")
          ) : (
            <span className="text-ellipsis overflow-x-auto">
              Selecciona una fecha
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onValueChange}
          disabled={{ after: new Date() }}
        />
      </PopoverContent>
    </Popover>
  );
}
