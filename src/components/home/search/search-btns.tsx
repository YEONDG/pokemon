import { memo } from "react";

import { Button } from "../../ui/button";

export const SearchButtons = memo(
  ({ onSearch, onClear }: { onSearch: () => void; onClear: () => void }) => {
    return (
      <>
        <Button onClick={onSearch}>검색</Button>
        <Button onClick={onClear}>전체목록</Button>
      </>
    );
  },
);
