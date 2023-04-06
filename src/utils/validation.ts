export const validationEmailOrUserNameRegExp =
  /(^([a-zA-Z0-9._-]+)@([a-zA-Z0-9_-]+)\.([a-zA-Z]{2,5})$|^[a-zA-Z][a-zA-Z0-9._-]{3,7}$)/;

export const validationEmailOrUserName = async (
  rule: any,
  emailOrUserName: string
) => {
  console.log(rule, emailOrUserName);
  return 1;
};
