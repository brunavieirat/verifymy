import { useForm } from "react-hook-form";
import { Stack, Container } from "@mui/material";
import { PhoneField, TextField } from "@/components";
import { PasswordField } from "@/components/PasswordField/PasswordField";

import { yupResolver } from "@hookform/resolvers/yup";
import { IMainSchema, mainSchema } from "@/schemas";
import ButtonsSection from "./ButtonsSection";
import { useRouter } from "next/router";
import AcceptTerms from "../AcceptTerms/AcceptTerms";
import Secured from "../Secured/Secured";

const Form = () => {
  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
  } = useForm<IMainSchema>({
    resolver: yupResolver(mainSchema),
    shouldFocusError: false,
  });
  let router = useRouter();
  const teste = useForm()

  return (
    <Container>
    <div>
      <Stack
        component="form"
        gap="12px"
        style={{ margin: "32px 0", padding: 0 }}
        onSubmit={handleSubmit((data) => {
          isValid && router.push("/congrats")
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
        
        <PhoneField defaultCountry={"br"} label="Mobile" />

        <PasswordField
          error={!!errors.password?.message}
          label="Password"
          placeholder="Please type in..."
          {...register("password")}
        />

        <AcceptTerms />
        <Secured />
        <ButtonsSection />
      </Stack>
    </div>
  </Container>

  );
};
export default Form;
