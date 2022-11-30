import { useEffect, useRef } from "react";
import { useServerConfig } from "../../../../contexts/serverConfig";
import { IdentityProvider } from "../../../../gen/graphql-types";
import { useSigninContext } from "../context";

export  function GLoginButton(): JSX.Element {
  const { signin, setState } = useSigninContext();
  const divRef = useRef<HTMLDivElement>(null);
  const { googleOAuthClientId } = useServerConfig();

  useEffect(() => {
    if (typeof window === "undefined" || !window.google || !divRef.current) {
      return;
    }

    try {
      /* */
      window.google.accounts.id.initialize({
        client_id: googleOAuthClientId,
        callback: async (res) => {
          await signin(IdentityProvider.Google, res.credential);
        },
      });
      window.google.accounts.id.renderButton(divRef.current, opts);
    } catch (error) {
      setState({ error });
    }
  }, [googleOAuthClientId, window.google, divRef.current]);

  return <div ref={divRef} />;
}

export default GLoginButton;