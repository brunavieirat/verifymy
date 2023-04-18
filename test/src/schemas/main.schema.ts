import * as yup from "yup";

export const mainSchema = yup.object({
  // check: yup.boolean().required(),
  email: yup.string().email().required(),
  fullName: yup.string().required(),
  // mobile: yup.string().required(),
  password: yup.string().required(),
});

export interface IMainSchema extends yup.InferType<typeof mainSchema> {}
