import { useForm } from "react-hook-form";
import { Stack, Container } from "@mui/material";
import { PhoneField, TextField } from "@/components";
import { PasswordField } from "@/components/PasswordField/PasswordField";

import { yupResolver } from "@hookform/resolvers/yup";
import { IMainSchema, mainSchema } from "@/schemas";

const Form = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<IMainSchema>({
    resolver: yupResolver(mainSchema),
  });

  return (
    <Container>
    <div>
      <Stack
        component="form"
        gap="12px"
        style={{ margin: "32px 0" }}
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <TextField
          autoComplete="name"
          error={!!errors.fullName?.message}
          label="Full Name"
          placeholder="Please type in..."
          {...register("fullName")}
        />
        <TextField
          autoComplete="email"
          error={!!errors.email?.message}
          label="Email"
          placeholder="Please type in..."
          {...register("email")}
        />
        <PasswordField
          error={!!errors.password?.message}
          label="Password"
          placeholder="Please type in..."
          {...register("password")}
        />
        <PhoneField defaultCountry={"br"} label="Mobile" />

        <button type="submit">Send</button>
      </Stack>
    </div>
  </Container>

  );
};
export default Form;
