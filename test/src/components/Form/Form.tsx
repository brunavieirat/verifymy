import Input from "../Input copy";
import InputPassword from "../InputPassword";
import InputPhone from "../InputPhone";

const Form = () => {
  return (
    <>
      <Input type="text" id="fullname" label="Full Name" />
      <Input type="email" id="email" label="Email" />
      <InputPhone />
      <InputPassword />
    </>
  );
};
export default Form;
