
import MainButton from "../ui/MainButton";
import Link from "next/link";
import TestingForm from "./TestingForm";
import { STORAGE_KEY } from "../utils";
import Camera from "../ui/Camera";
import Gallery from "../ui/Gallery";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  const registered =  cookieStore.get(STORAGE_KEY);

  return (
    <section className="h-full flex justify-center items-center">
      {!registered && (<TestingForm />)}
      {registered && (
        <div className="w-full flex justify-around">
            <Camera />
            <Gallery />
        </div>
      )}
      <Link href=".." className="fixed bottom-12 left-11">
        <MainButton title="Back" className="" />
      </Link>
    </section>
  );
}
