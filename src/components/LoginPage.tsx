import { useEffect } from "react";
import { userAuthStore } from "../store/auth.store";

export const LoginPage = () => {
  const authStatus = userAuthStore((state) => state.status);
  const login = userAuthStore((state) => state.login);
  const logout = userAuthStore((state) => state.logout);
  const user = userAuthStore((state) => state.user);

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500);
  }, []);

  if (authStatus === "checking") {
    return <h3>Loading...</h3>;
  }
  return (
    <>
      <h3>Login Page</h3>
      {authStatus === "authenticated" ? (
        <div>Autenticado como: {JSON.stringify(user, null, 2)}</div>
      ) : (
        <div>No autenticado</div>
      )}

      {authStatus === "authenticated" ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login("mauri@mauri.com", "1234")}>Login</button>
      )}
    </>
  );
};
