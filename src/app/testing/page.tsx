import MainButton from "../ui/MainButton";
import Link from "next/link";
import TestingForm from "./TestingForm";
import { STORAGE_KEY_REGISTERED } from "../utils";
import { cookies } from "next/headers";
import TestingImageUpload from "../components/TestingImageUpload";

export default async function Page() {
  const cookieStore = await cookies();
  const registered =  cookieStore.get(STORAGE_KEY_REGISTERED);

  return (
    <section className="relative h-screen flex justify-center items-center overflow-hidden">
      {!registered && (<TestingForm />)}
      {registered && (<TestingImageUpload />)}
      <Link href="/" className="fixed bottom-12 left-11">
        <MainButton title="Back" className="" />
      </Link>
    </section>
  );
}
