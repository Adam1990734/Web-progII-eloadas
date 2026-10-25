import InventionIndexView from '@/pages/invention/index';
import InventorIndexView from '@/pages/inventor/index';
import { useState } from 'react';

export default function index() {
    const [chosenTable, setTable] = useState<number>(0);

    return <>
        { chosenTable === 0 &&
            <InventionIndexView hasOperations={false}/>
        }
        { chosenTable === 1 &&
            <InventorIndexView hasOperations={false}/>
        }
    </>
}
