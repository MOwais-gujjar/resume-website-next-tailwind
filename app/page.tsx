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
      <div>
        <Wrapper>
          <Header />
          <Section />
          <Skills />
          <Projects />
          <Footer />
        </Wrapper>
      </div>
    </>
  );
}
