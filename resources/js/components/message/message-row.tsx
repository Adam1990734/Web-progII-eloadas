import { Message } from '@/types';

type Props = {
    message: Message;
};

export default function MessageRow({ message }: Props) {
    return (
        <tr>
            <td>{message.userName ?? "Anonymouse"}</td>
            <td>{message.createdAt.date}</td>
            <td>{message.content}</td>
        </tr>
    );
}
