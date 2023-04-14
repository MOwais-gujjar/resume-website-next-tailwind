import Image from "next/image";
import {
  Header,
  Section,
  Projects,
  Skills,
  Footer,
  Wrapper,
} from "./Components";
export default function Home() {
  return (
    <>
      <Wrapper>
        <Header />
        <Section />
        <Skills />
        <Projects />
        <Footer />
      </Wrapper>
    </>
  );
}
