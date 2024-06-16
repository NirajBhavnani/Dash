"use client";

import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { MeetingState, homeCardsData } from "@/constants";
import { useRouter } from "next/navigation";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<MeetingState>(undefined);
  
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {homeCardsData.map((card, index) => (
        <HomeCard
          key={index}
          img={card.img}
          title={card.title}
          description={card.description}
          color={card.color}
          handleClick={() => {
            if (card.handleClickState === undefined) {
              router.push("/recordings");
            } else {
              setMeetingState(card.handleClickState);
            }
          }}
        />
      ))}
    </section>
  );
};

export default MeetingTypeList;
