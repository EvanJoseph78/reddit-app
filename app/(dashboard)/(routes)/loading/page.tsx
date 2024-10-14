import { Spinner } from "@/components/spinner";

export default function Loading() {
  return (
    <div className="h-full w-full">
      <Spinner size={"xl"}></Spinner>
    </div>
  );
}

