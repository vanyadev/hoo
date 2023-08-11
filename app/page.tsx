import Image from "next/image";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import Actions from "./components/Actions/Actions";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-white md:bg-[#f3f3f3] text-base">
      <ContentWrapper />
      <Actions />
    </main>
  );
}
