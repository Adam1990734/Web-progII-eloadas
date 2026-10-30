import { Message } from '@/types';

type Props = {
    message: Message;
};

export default function MessageRow({ message }: Props) {
    return (
        <tr className={'border-t transition-colors hover:bg-muted/30'}>
            <td className={'p-4'}>{message.userName ?? 'Anonymouse'}</td>
            <td className={'p-4'}>{message.createdAt.date}</td>
            <td className={'p-4'}>{message.content}</td>
        </tr>
    );
}
