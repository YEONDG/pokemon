/* eslint-disable react-hooks/exhaustive-deps */
import { useSuspenseInfinitePoke } from "@/hooks/useSuspenseInfinitePoke";
import { useStore } from "@/store/store";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { useEffect, useRef, useState } from "react";

import { PokemonCard } from "./pokemonCard";

const ITEMS_PER_ROW = 4;

export const PokemonList = () => {
  const isSearchActive = useStore((state) => state.isSearchActive);
  const listRef = useRef<HTMLDivElement | null>(null);
  const [estimateSize, setEstimateSize] = useState<number>(600);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSuspenseInfinitePoke();

  const allRows = data ? data.pages.flatMap((d) => d.results) : [];

  const rowVirtualizer = useWindowVirtualizer({
    count: hasNextPage
      ? allRows.length / ITEMS_PER_ROW + 1
      : allRows.length / ITEMS_PER_ROW,
    estimateSize: () => estimateSize,
    overscan: 5,
    scrollMargin: listRef.current?.offsetTop ?? 0,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setEstimateSize(300);
      } else {
        setEstimateSize(600);
      }
    };

    // 초기 사이즈 설정
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();
    if (!lastItem) {
      return;
    }

    if (
      lastItem.index >= allRows.length / ITEMS_PER_ROW - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allRows.length,
    isFetchingNextPage,
    rowVirtualizer.getVirtualItems(),
  ]);

  if (isSearchActive) {
    return null;
  }

  return (
    <>
      <section
        className="w-full"
        ref={listRef}
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const isLoaderRow = virtualRow.index > allRows.length - 1;

          const startIdx = virtualRow.index * ITEMS_PER_ROW;
          const endIdx = (virtualRow.index + 1) * ITEMS_PER_ROW;
          const post = allRows.slice(startIdx, endIdx);

          return (
            <div
              className="flex flex-col justify-center"
              key={virtualRow.index}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualRow.size}px`,
                transform: `translateY(${
                  virtualRow.start - rowVirtualizer.options.scrollMargin
                }px)`,
              }}
            >
              {" "}
              {isLoaderRow ? (
                hasNextPage ? (
                  "로딩중 입니다.."
                ) : (
                  "로딩할 항목이 더 이상 없습니다."
                )
              ) : (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {post.map((Item) => {
                    return <PokemonCard key={Item?.name} name={Item?.name} />;
                  })}
                </div>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default PokemonList;
