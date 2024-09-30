
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

interface TriggerProps {
  name: string;
  itens: string[];
}

export const Trigger = ({ name, itens }: TriggerProps) => {
  return (
    <div>
      <Select>
        <SelectTrigger className="min-w-[100px] flex justify-between p-1 text-xs rounded-xl hover:bg-gray-50/50">
          <SelectValue placeholder="Relevância" />
          <ChevronDown className="h-4"></ChevronDown>
        </SelectTrigger>
        <SelectContent className="min-w-[100px] text-xs border rounded-xl mt-1 bg-gray-900 border-none py-2 px-4">
          <SelectGroup className="space-y-2">
            <SelectLabel>{name}</SelectLabel>
            {itens.map((item) => (
              <SelectItem value={item}>{item}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

  );
}
