export const validationEmailOrUserName = (
  rule: any,
  emailOrUserName: string
) => {
  const emailReg = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9_-]+)\.([a-zA-Z]{2,5})$/;
  const userNameReg = /^[a-zA-Z][a-zA-Z0-9._-]{3,7}$/;
  try {
    console.log("vlidate");
    const validtate =
      emailReg.test(emailOrUserName) || userNameReg.test(emailOrUserName);
    return validtate
      ? Promise.resolve()
      : Promise.reject("Your Input Username Or Email Is Incorrect!");
  } catch (err) {
    Promise.reject("Unexception Error in validating!");
  }
};
