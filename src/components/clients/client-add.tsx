import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import ClientForm from "./client-form";
import { FormSchema } from "@/lib/schemas/client";
import { useState } from "react";
import { toast } from "sonner";
import { DialogClose } from "@radix-ui/react-dialog";

interface ClientAddProps {
  onSubmit: (client: FormSchema) => void;
}

export default function ClientAdd({ onSubmit }: ClientAddProps) {
  const [open, setOpen] = useState(false);

  function innerOnSubmit(client: FormSchema) {
    onSubmit(client);
    setOpen(false);
    toast("Cliente añadido con éxito");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Añadir cliente</Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll max-h-screen">
        <DialogHeader>
          <DialogTitle>Añadir cliente</DialogTitle>
          <DialogDescription>
            Añade un nuevo cliente al sistema
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-2">
          <ClientForm id="client-add" onSubmit={innerOnSubmit} />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cerrar
            </Button>
          </DialogClose>

          <Button type="submit" form="client-add">
            Añadir cliente
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
