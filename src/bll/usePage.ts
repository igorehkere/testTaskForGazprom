import { useState } from "react";

export function usePage() {
    const [selectItem, setSelectItem] = useState<{ label: string; value: number } | null>({ label: '10', value: 10 });
    const [numPage, setNumPage] = useState(1);
    return {selectItem, setSelectItem, numPage, setNumPage}
}