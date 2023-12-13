import { useEffect, useRef } from 'react';
import { PokemonCard } from './pokemonCard';
import { useSuspenseInfinitePoke } from '@/hooks/useSuspenseInfinitePoke';

import { useWindowVirtualizer } from '@tanstack/react-virtual';

const ITEMS_PER_ROW = 4;

export const PokemonList = () => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSuspenseInfinitePoke();

  const allRows = data ? data.pages.flatMap((d) => d.results) : [];
  console.log(allRows.length / 4, '길이는?');

  const rowVirtualizer = useWindowVirtualizer({
    count: hasNextPage
      ? allRows.length / ITEMS_PER_ROW + 1
      : allRows.length / ITEMS_PER_ROW,
    estimateSize: () => 400,
    overscan: 5,
    scrollMargin: listRef.current?.offsetTop ?? 0,
  });

  // console.log(listRef.current?.offsetTop, '이것은?');
  // console.log(rowVirtualizer, '안에 뭐있나');
  console.log(rowVirtualizer.getTotalSize(), '총높이');

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();
    console.log(lastItem, 'lastItem');
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

  return (
    <>
      <section
        className='w-full'
        ref={listRef}
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const isLoaderRow = virtualRow.index > allRows.length - 1;

          const startIdx = virtualRow.index * ITEMS_PER_ROW;
          const endIdx = (virtualRow.index + 1) * ITEMS_PER_ROW;
          const post = allRows.slice(startIdx, endIdx);

          return (
            <div
              key={virtualRow.index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualRow.size}px`,
                transform: `translateY(${
                  virtualRow.start - rowVirtualizer.options.scrollMargin
                }px)`,
              }}
            >
              {isLoaderRow ? (
                hasNextPage ? (
                  '로딩중 입니다..'
                ) : (
                  '로딩할 항목이 더 이상 없습니다.'
                )
              ) : (
                <div className='grid grid-cols-2 sm:grid-cols-4  sm:gap-2'>
                  {post.map((Item) => {
                    return (
                      <PokemonCard
                        key={Item?.name}
                        name={Item?.name}
                        url={Item?.url}
                      />
                    );
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
