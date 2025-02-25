import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "El nombre de usuario debe tener mínimo 2 caracteres",
  }),
  firstName: z.string().min(2, {
    message: "El nombre debe tener mínimo 2 caracteres",
  }),
  lastName: z.string().min(2, {
    message: "El apellido debe tener mínimo 2 caracteres",
  }),
  email: z.string().email("Debe ser un correo válido"),
  identifier: z
    .string()
    .length(16, "La cédula debe ser de 16 caracteres, incluyendo guiones")
    .regex(/\d{3}-\d{6}-\d{4}[a-zA-Z]/, "Formato de cédula incorrecto"),
  gender: z
    .enum(["not-specified", "feminine", "masculine"] as const)
    .default("not-specified"),
  notifyEmail: z.boolean(),
});

export default formSchema;
export type FormSchema = z.infer<typeof formSchema>;
