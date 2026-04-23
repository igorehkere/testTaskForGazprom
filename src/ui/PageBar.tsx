import styles from './UserList.module.css'
import { FieldGroup } from '@consta/uikit/FieldGroup';
import { Button } from '@consta/uikit/Button';
import { Select } from '@consta/uikit/Select';
import { usePage } from '../bll/usePage';

type props = {
    changePage: (page: number) => void,
    changeItemsCount: (cnt: number) => void,
}

export function PageBar({ changePage, changeItemsCount }: props) {
    const items = [
        { label: '10', value: 10 },
        { label: '25', value: 25 },
        { label: '50', value: 50 }
    ];
    const {selectItem, setSelectItem, numPage, setNumPage} = usePage();
    return (
        <div className={styles.pageBar}>
            <FieldGroup form="round" size="m" className={styles.fieldGr}>
                <Select
                    placeholder="Select"
                    items={items}
                    value={selectItem}
                    onChange={(value) => setSelectItem(value)}
                    getItemKey={(item) => item.value.toString()} 
                />
                <Button label="Применить" onClick={() => {
                    changeItemsCount(selectItem?.value ?? 10);
                }}/>
            </FieldGroup>
            <div className={styles.scroll}>
                <Button label="<" onClick={() => {
                    if (numPage !== 1) {
                        setNumPage(numPage - 1);
                        changePage(numPage - 1)
                    }
                }}/>
                <p>{numPage}</p>
                <Button label=">" onClick={() => {
                    setNumPage(numPage + 1);
                    changePage(numPage + 1)
                }}/>
            </div>
        </div>
    )
}