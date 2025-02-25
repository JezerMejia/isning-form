import {
  FormSchema,
  genderLabels,
  subscriptionLabels,
} from "@/lib/schemas/client";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

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
    id: "birthDate",
    header: "Fecha de nacimiento",
    accessorFn: (v) => {
      const birthDate = v.birthDate;
      return format(birthDate, "PP");
    },
  },
  {
    id: "gender",
    header: "Género",
    accessorFn: (v) => genderLabels[v.gender],
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
