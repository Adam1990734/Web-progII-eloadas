import { Message } from '@/types';

type Props = {
    message: Message;
};

export default function MessageRow({ message }: Props) {
    return (
        <tr>
            <td>{message.userName}</td>
            <td>{`${message.createdAt.getDate()} - ${message.createdAt.getTime()}`}</td>
            <td>{message.content}</td>
        </tr>
    );
}
