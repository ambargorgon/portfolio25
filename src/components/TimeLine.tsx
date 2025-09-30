// src/components/Timeline.tsx
import React from "react";
import TimelineItem from "./common/TimeLineItem";
import { useTranslation } from "react-i18next";

const Timeline: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="w-[90%] border-b-2 font-bold pl-36 my-16 pb-2 text-2xl border-white/50">{t("experience")}</h3>
      <div className=" p-6 rounded-lg w-full max-w-xl mx-auto h-[80%]">
        <TimelineItem
          title={t("job1-title")}
          date={t("job1-date")}
          description={t("job1-description")}
        />
        <TimelineItem
          title={t("job2-title")}
          date={t("job2-date")}
          description={t("job2-description")}
        />
        <TimelineItem
          title={t("job3-title")}
          date={t("job3-date")}
          description={t("job3-description")}
        />
      </div>
    </div>
  );
};

export default Timeline;
