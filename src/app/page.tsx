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

      <div className="flex flex-row gap-4 justify-end">
        <ClientAdd onSubmit={onSubmit} />
      </div>

      <DataTable columns={columns} data={clients} />
    </div>
  );
}
