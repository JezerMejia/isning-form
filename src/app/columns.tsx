import { FormSchema, subscriptionLabels } from "@/lib/schemas/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<FormSchema>[] = [
  {
    accessorKey: "username",
    header: "Usuario",
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
  {
    id: "suscription",
    header: "Suscripción",
    accessorFn: (v) => subscriptionLabels[v.subscription],
  },
];
