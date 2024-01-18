import React from "react";
import styled from "styled-components";

export default function Tailwind() {
  return (
    <MainContainer>
      <Div>Rapidly build modern websites without ever leaving your HTML.</Div>
      <Heading>
        A utility-first CSS framework packed with classes like{" "}
        <Span>
          flex<Span>,</Span> pt-4
        </Span>
        ,<Span> text-center </Span>and <Span>rotate-90</Span> that can be
        composed to build any design, directly in your markup.
      </Heading>
      <Center>
        <GetStarted>Get started</GetStarted>
        <SearchBox placeholder="Quick search..." />
      </Center>
    </MainContainer>
  );
}
const Div = styled.div`
  font-size: 3.75rem;
  line-height: 1;
  font-weight: 800;
  font-family: Inter var, ui-sans-serif, system-ui, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
`;
const MainContainer = styled.div`
  padding: 7rem 6rem 8rem 7rem;
`;
const Heading = styled.div`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-family: Inter var, ui-sans-serif, system-ui, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  padding: 1.5rem 10.5rem 3rem 10rem;
  --tw-text-opacity: 1;
  color: rgb(71 85 105 / var(--tw-text-opacity));
`;
const Span = styled.span`
  font-size: 1.125rem;
  line-height: 1.75rem;
  --tw-text-opacity: 1;
  color: rgb(14 165 233 / var(--tw-text-opacity));
  font-weight: 600;
  font-family: Fira Code VF, ui-monospace, SFMono-Regular, Menlo, Monaco,
    Consolas, Liberation Mono, Courier New, monospace;
`;
const GetStarted = styled.button`
  font-weight: 600;
  padding: 12px 21px 13px 21px;
  border-radius: 8px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #ffffff;
  background-color: #000000;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  font-family: Inter var, ui-sans-serif, system-ui, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
`;
const SearchBox = styled.input`
  font-family: Inter var, ui-sans-serif, system-ui, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  display: flex;
  background: url("https://static.thenounproject.com/png/101791-200.png")
    no-repeat left;
  background-size: 20px;
  padding: 12px 21px 13px 34px;
  border-radius: 8px;
  border: 0 solid #e5e7eb;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
