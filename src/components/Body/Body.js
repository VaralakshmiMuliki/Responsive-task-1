import React from "react";
import { Result } from "../Results/Result";
import { Benifits } from "../Benifits/Benifits";
import { Counter } from "../Counter/Counter";
import { CustomerReview } from "../CustomerReview/CustomerReview";
import { Features } from "../Features/Features";
import { FindUs } from "../FindUs/FindUs";
import { IntroCarousel } from "../IntroCarousel/IntroCarousel";
import { LetterArt } from "../LetterArt/LetterArt";
import { PriceList } from "../PriceList/PriceList";
import { SkillList } from "../SkillList/SkillList";
import { Story } from "../Story/Story";
import { ThanksCard } from "../ThanksCard/ThanksCard";

export const Body = () => {
  return (
    <>
      <IntroCarousel />
      <Benifits />
      <Story />
      <Counter />
      <Features />
      <SkillList />
      <LetterArt />
      <CustomerReview />
      <PriceList />
      <Result/>
      <FindUs />
      <ThanksCard />
    </>
  );
};
