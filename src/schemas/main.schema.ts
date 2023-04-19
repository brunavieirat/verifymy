import * as yup from "yup";

export const mainSchema = yup.object({
  // check: yup.boolean().required(),
  email: yup.string().email().required(),
  fullName: yup
    .string()
    .label("Full Name")
    .required()
    .test(function (value) {
      const nameArr = value.split(" ");
      return nameArr.length >= 2;
    }),
  // mobile: yup.string().required(),
  password: yup.string().required(),
});

export interface IMainSchema extends yup.InferType<typeof mainSchema> {}
