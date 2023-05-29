import { getClient } from "./lib/client";

import { gql } from "@apollo/client";
import Link from "next/link";

const query = gql`
  query Now {
    now(id: "1") {
      // Specify the fields you want to retrieve
    }
  }
`;

export default async function Page() {https://bobbyhadz.com/blog/react-attempted-import-error-is-not-exported-from
  const { data } = await getClient().query({ query });

  return (
    <>
      <main>
        {data.now}
      </main>

      <Link href="/rick">
        take me to rick
      </Link>

    </>
  );
}