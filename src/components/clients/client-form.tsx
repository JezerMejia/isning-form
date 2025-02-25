import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import formSchema, {
  FormSchema,
  subscriptionLabels,
  subscriptionList,
} from "@/lib/schemas/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import DatePicker from "../ui/date-picker";

interface ClientFormProps {
  id: string;
  onSubmit: (client: FormSchema) => void;
}

export default function ClientForm({ id, onSubmit }: ClientFormProps) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      identifier: "",
      gender: "not-specified",
      notifyEmail: false,
      subscription: "free",
    },
  });

  function innerOnSubmit(client: FormSchema) {
    onSubmit(client);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        id={id}
        onSubmit={form.handleSubmit(innerOnSubmit)}
        className="grid grid-cols-2 gap-2"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Juan" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellido</FormLabel>
              <FormControl>
                <Input placeholder="Pérez" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de usuario</FormLabel>
              <FormControl>
                <Input placeholder="juanp" {...field} />
              </FormControl>
              <FormDescription>
                Este es el nombre de usuario público
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="identifier"
          render={({ field }) => (
            <FormItem className={"col-span-2 sm:col-span-1"}>
              <FormLabel>Cédula</FormLabel>
              <FormControl>
                <Input
                  placeholder="001-010101-1000A"
                  maxLength={16}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className={"col-span-2"}>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input placeholder="juanp@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Género</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="not-specified">No especificado</SelectItem>
                  <SelectItem value="female">Femenino</SelectItem>
                  <SelectItem value="male">Masculino</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="birthDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de nacimiento</FormLabel>
              <FormControl>
                <DatePicker
                  value={field.value}
                  onValueChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="notifyEmail"
          render={({ field }) => (
            <FormItem
              className={
                "col-span-2 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 mt-2"
              }
            >
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Notificar por correo electrónico</FormLabel>
                <FormDescription>
                  Se enviarán notificaciones al correo electrónico
                </FormDescription>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subscription"
          render={({ field }) => (
            <FormItem className={"col-span-2 rounded-md border p-4 mt-2"}>
              <FormLabel>Suscripción</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  {subscriptionList.map((v) => {
                    const label = subscriptionLabels[v];
                    return (
                      <FormItem
                        className="flex items-center space-x-3 space-y-0"
                        key={v}
                      >
                        <FormControl>
                          <RadioGroupItem value={v} />
                        </FormControl>
                        <FormLabel className="font-normal">{label}</FormLabel>
                      </FormItem>
                    );
                  })}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
