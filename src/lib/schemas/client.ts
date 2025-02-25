import { z } from "zod";

export const subscriptionList = ["free", "pro", "business"] as const;
export const subscriptionLabels: {
  [key in FormSchema["subscription"]]: string;
} = {
  free: "Gratis",
  pro: "Pro - $9.99",
  business: "Business - $19.99",
};

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
  birthDate: z.date({ required_error: "Se requiere una fecha de nacimiento" }),
  gender: z
    .enum(["not-specified", "female", "male"] as const)
    .default("not-specified"),
  subscription: z.enum(subscriptionList).default("free"),
  notifyEmail: z.boolean(),
});

export default formSchema;
export type FormSchema = z.infer<typeof formSchema>;
