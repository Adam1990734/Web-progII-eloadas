import { Invention } from '@/types';
import { Inventor } from '@/types';
import { Message } from '@/types';
import InventionRow from '@/components/invention/invention-row';
import InventorRow from '@/components/inventor/inventor-row';
import MessageRow from '@/components/message/message-row';

type Props = {
    headerLabels: string[];
    objectToMap: Inventor[] | Invention[] | Message[];
    hasOpertions?: boolean
}

type HeaderProps = {
    headerLabels: string[];
    hasOpertions?: boolean;
};

function Header({ headerLabels, hasOpertions = false } : HeaderProps) {
    return <thead><tr>
        {
            headerLabels.map((label, id) => (
                <th key={id}>
                    { label }
                </th>
            ))
        }
        { hasOpertions && <th>Operations</th> }
    </tr></thead>
}

type BodyProps = {
    elements : Inventor[] | Invention[] | Message[];
}

function Body({ elements } : BodyProps) {
    return <tbody>
        {
            elements.map((obj, id) => {
                switch (obj.type) {
                    case 'Invention':
                        return <InventionRow key={id} invention={obj} isComplex={false}/>;
                    case 'Inventor':
                        return <InventorRow key={id} inventor={obj} isComplex={false}/>;
                    case 'Message':
                        return <MessageRow key={id} message={obj}/>;
                }
            })
        }
    </tbody>
}

export default function Table({ objectToMap, headerLabels, hasOpertions = false } : Props) {
    return (
        <table>
            <Header headerLabels={headerLabels} hasOpertions={hasOpertions} />
            <Body elements={objectToMap} />
        </table>
    );
}
