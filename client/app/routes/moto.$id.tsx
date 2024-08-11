import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({params}: LoaderFunctionArgs) {
  return params;
}

export default function Moto(){
  const data = useLoaderData<typeof loader>();
  
  return (
    <p>
      {data.id}
    </p>
  )
}