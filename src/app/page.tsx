"use client";

// import Image from "next/image";

import { FormSchema } from "@/lib/schemas/client";
import { DataTable } from "./data-table";
import { useState } from "react";
import { columns } from "./columns";
import ClientAdd from "@/components/clients/client-add";

export default function Home() {
  const [clients, setClients] = useState<FormSchema[]>([]);

  function onSubmit(values: FormSchema) {
    setClients([...clients, values]);
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Clientes</h1>
      <div className="space-y-1">
        <p>Administra los clientes del sistema.</p>
        <p className="text-muted-foreground">
          Este es un sistema de prueba, con un solo Dialog para añadir clientes,
          y una tabla para visualizarlos.
        </p>
      </div>

      <div className="flex flex-row gap-4 justify-end">
        <ClientAdd onSubmit={onSubmit} />
      </div>

      <DataTable columns={columns} data={clients} />
    </div>
  );
}
