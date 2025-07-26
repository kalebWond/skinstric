"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import BulletFilled from "../ui/bullet-filled";
import Bullet from "../ui/bullet";
import ProgressFill from "../ui/ProgressFill";
import { getTopPredictions, STORAGE_KEY_DEMOGRAPHIC, TPrediction } from "../utils";
import Link from "next/link";
import MainButton from "../ui/MainButton";

type AiCategory = "race" | "age" | "gender";

export type CategoryPrediction = Record<string, number>;

export type TDemographics = {
  race: CategoryPrediction;
  age: CategoryPrediction;
  gender: CategoryPrediction;
};

export default function DemographicSummary() {
  const [data, setData] = useState<TDemographics | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<AiCategory>("race");
  const estimates = data ? Object.entries(data[selectedCategory]).sort((a,b) => b[1]- a[1]) : null;
  const [predictions, setPredictions] = useState<TPrediction | null>(null)
  
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY_DEMOGRAPHIC);
    if (stored) {
      const dataObj = JSON.parse(stored);
      setData(dataObj);
      setPredictions(getTopPredictions(dataObj))
    }
  }, []);

  function onCategorySelect(category: AiCategory) {
    setSelectedCategory(category);
  }

  function onChangePrediction(index: number) {
    const selectedPrediction = estimates![index];
    setPredictions(prev => ({...prev!, [selectedCategory]: selectedPrediction[0]}))
  }

  return (
    <div className="grid grid-cols-[1.5fr_6fr_2.5fr] gap-4 my-10 pb-9">
      <div className="flex flex-col gap-2 uppercase">
        { !predictions && Array(3).fill(1).map((_,i) => (
          <div key={i} className="w-44 h-24 bg-pale animate-pulse"></div>
        )) }
        {predictions && Object.entries(predictions).map(item => {
          const [category, value] = item as [AiCategory, string];
          return (
            <div key={category}
                  onClick={() => onCategorySelect(category)}
                  className={clsx("px-4 py-3 text-sm font-semibold tracking-tight border-t border-foreground cursor-pointer", {
                    "text-background bg-foreground": selectedCategory === category,
                    "bg-pale hover:bg-grayish": selectedCategory !== category,
                  })}
                >
                  <p className="mb-8">{value}</p>
                  <p className="">{category === 'gender' ? 'sex' : category}</p>
                </div>
          );
        })}
      </div>
      {/* PERCENTAGE */}
      <div className={clsx("flex flex-col bg-pale px-4 py-5 border-foreground", { "animate-pulse": !data, "border-t": data })}>
          {predictions && data && (
            <>
              <h3 className="text-[40px] leading-[40px] tracking-tighter capitalize">
              {predictions[selectedCategory]} <span className="lowercase">{selectedCategory === 'age' && 'y.o.'}</span>
            </h3>
            <div className="flex-1 flex relative justify-end items-center">
              <ProgressFill radius={100} stroke={3}
                progress={Math.trunc(data[selectedCategory][predictions[selectedCategory]] * 100)} />
            </div>
            </>
          )}
      </div>
      {/* ESTIMATE DETAILS */}
      <div className={clsx("bg-pale text-foreground border-foreground pb-4", {
        "animate-pulse": !data,
        "border-t": data
        })}>
        {/* TITLE */}
        {estimates && (
          <div className="flex justify-between px-4 py-3.5 text-base tracking-tighter uppercase">
            <span className="uppercase">
              {selectedCategory}
            </span>
            <span className="">
              a. i. confidence
            </span>
          </div>
        )}
        { estimates && estimates.map(([key,value], i) => (
            <div key={key} onClick={() => onChangePrediction(i)} className={clsx("flex justify-between px-4 py-3 text-sm transition-colors duration-300 cursor-pointer", {
              "bg-foreground text-background ": key === predictions![selectedCategory],
              "hover:bg-grayish": key !== predictions![selectedCategory],
            })}>
              <span className="flex items-center capitalize">
                {key === predictions![selectedCategory] ? <BulletFilled classname="mr-3" /> : <Bullet classname="mr-3" />} {key}</span>
              <span className="">{Math.trunc(value*100)}%</span>
            </div>
          )
        ) }
      </div>
      <div className="fixed bottom-0 left-0 px-8 pb-6 w-full flex justify-between items-end bg-background">
        <Link href="/testing" className="">
          <MainButton title="Back" className="" />
        </Link>
        <p className="text-bluish">If A.I. estimate is wrong, select the correct one.</p>
        <div className="flex gap-2">
          <button className="text-xs px-4 py-2.5 border border-foreground cursor-pointer">RESET</button>
          <button className="text-xs px-4 py-2.5 border bg-foreground text-background cursor-pointer">CONFIRM</button>
        </div>
      </div>
    </div>
  );
}
