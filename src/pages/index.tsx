import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div>
      <p>
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
      </Head>
      <div>
        <h1>
          Create <span>T3</span> App
        </h1>
        <div>
          <Link
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3>First Steps →</h3>
            <div>
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link href="https://create.t3.gg/en/introduction" target="_blank">
            <h3>Documentation →</h3>
            <div>
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div>
        <div>
          <p>{hello.data ? hello.data.greeting : "Loading tRPC query..."}</p>
          <AuthShowcase />
        </div>
      </div>
    </>
  );
};

export default Home;
