import { memo } from "react";

import { Button } from "../../ui/button";

export const SearchButtons = memo(
  ({ onSearch, onClear }: { onSearch: () => void; onClear: () => void }) => {
    return (
      <>
        <Button onClick={onSearch} className="dark:bg-gray-200">
          검색
        </Button>
        <Button onClick={onClear} className="dark:bg-gray-200">
          전체목록
        </Button>
      </>
    );
  },
);
