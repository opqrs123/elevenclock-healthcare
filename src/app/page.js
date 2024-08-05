import Main from "@/pages/home";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300"]
});

export default function Home() {
  return <Main className={roboto.className} />;
}
