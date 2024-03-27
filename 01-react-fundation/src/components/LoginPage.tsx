import { userAuthStore } from "../store/auth.store";

export const LoginPage = () => {
  const authStatus = userAuthStore((state) => state.status);
  return (
    <>
      <h3>Login Page</h3>
      {authStatus}
    </>
  );
};
