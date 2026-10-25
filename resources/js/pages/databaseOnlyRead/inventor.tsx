import InventorIndexView from '@/pages/inventor/index';

export default function InventorReadOnlyView() {
    return <InventorIndexView hasOperations={false}/>;
}
