import { useState } from "react";

const LoginPageContext = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const onChangeInput = (value: string, name: string) => {
    setFormState({ ...formState, [name]: value });
  };

  const onSubmitForm = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return {
    formState,
    isLoading,
    onChangeInput,
    onSubmitForm,
  };
};

export default LoginPageContext;
