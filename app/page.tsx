"use client";
import {
  Header,
  Section,
  Projects,
  Skills,
  Footer,
  Wrapper,
} from "./Components";
import React, { useState } from "react";
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
