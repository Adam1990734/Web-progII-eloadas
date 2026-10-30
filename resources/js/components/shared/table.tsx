import { Invention } from '@/types';
import { Inventor } from '@/types';
import { Message } from '@/types';
import InventionRow from '@/components/invention/invention-row';
import InventorRow from '@/components/inventor/inventor-row';
import MessageRow from '@/components/message/message-row';

type Props = {
    headerLabels: string[];
    objectToMap: Inventor[] | Invention[] | Message[];
    hasOperations?: boolean;
};

type HeaderProps = {
    headerLabels: string[];
    hasOperations?: boolean;
};

function Header({ headerLabels, hasOperations: hasOperations = false }: HeaderProps) {
    return (
        <thead className={'bg-muted/50'}>
            <tr>
                {headerLabels.map((label, id) => (
                    <th
                        key={id}
                        className={'h-12 px-4 text-left align-middle font-medium text-muted-foreground'}
                    >
                        {label}
                    </th>
                ))}
                {hasOperations && <th
                    className={"h-12 px-4 text-right font-medium text-muted-foreground"}
                >Operations</th>}
            </tr>
        </thead>
    );
}

type BodyProps = {
    elements: Inventor[] | Invention[] | Message[];
    hasOperations?: boolean;
};

function Body({ elements, hasOperations = false } : BodyProps) {
    return <tbody>
        {
            elements.map((obj, id) => {
                switch (obj.type) {
                    case 'Invention':
                        return <InventionRow key={id} invention={obj} isComplex={false} hasOperations={hasOperations}/>;
                    case 'Inventor':
                        return <InventorRow key={id} inventor={obj} isComplex={false} hasOperations={hasOperations}/>;
                    case 'Message':
                        return <MessageRow key={id} message={obj}/>;
                }
            })
        }
    </tbody>
}

export default function Table({ objectToMap, headerLabels, hasOperations = false }: Props) {
    return (
        <div className={'overflow-hidden rounded-xl border border-sidebar-border/70 bg-background shadow-sm dark:border-sidebar-border'}>
            <div className={'overflow-x-auto'}>
                <table className={'w-full text-sm'}>
                    <Header headerLabels={headerLabels} hasOperations={hasOperations} />
                    <Body elements={objectToMap} hasOperations={hasOperations} />
                </table>
            </div>
        </div>
    );
}
