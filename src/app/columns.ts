import { FormSchema } from "@/lib/schemas/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<FormSchema>[] = [
  {
    accessorKey: "username",
    header: "Nombre de usuario",
  },
  {
    accessorKey: "firstName",
    header: "Nombre",
  },
  {
    accessorKey: "lastName",
    header: "Apellido",
  },
  {
    accessorKey: "email",
    header: "Correo",
  },
  {
    accessorKey: "identifier",
    header: "Cédula",
  },
];
