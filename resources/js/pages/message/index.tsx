import { type SharedData } from '@/types';
import { Head, Form, usePage } from '@inertiajs/react';
export default function message() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { auth } = usePage<SharedData>().props;

    return <>
        <Head title={"Contact us!"}>
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        </Head>
        <div>
            <Form
                action={"/messages"}
                method={"POST"}
            >
                <button></button>
            </Form>
        </div>
    </>;
}
