import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";

// import { wrapper } from "~/redux/store";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
      </Head>
      <div>{hello.data?.greeting}</div>
    </>
  );
};

// ! Persisting state between page navigation in Next.js
// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ params }) => {
//       await store.dispatch(setAuthState(true));
//       // we can set the initial state from here
//       // we are setting to false but you can run your custom logic here
//       return {
//         props: {
//           authState: store.getState(),
//         },
//       };
//     }
// );

export default Home;
