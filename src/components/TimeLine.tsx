// src/components/Timeline.tsx
import React from "react";
import TimelineItem from "./common/TimeLineItem";
import { useTranslation } from "react-i18next";

const Timeline: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="w-[90%] border-b-1 font-bold pl-36 my-16 pb-2 text-2xl border-white">{t("experience")}</h3>
      <div className=" p-6 rounded-lg w-full max-w-xl mx-auto h-[80%]">
        <TimelineItem
          title={t("job1-title")}
          date={t("job1-date")}
          description={t("job1-description")}
        />
        <TimelineItem
          title={t("jobw-title")}
          date={t("jobw-date")}
          description={t("jobw-description")}
        />
        <TimelineItem
          title={t("jobe-title")}
          date={t("jobe-date")}
          description={t("jobe-description")}
        />
      </div>
    </div>
  );
};

export default Timeline;
