import { Button } from '@/components/ui/button';
import { Textarea } from '@headlessui/react';
import { useRef, useState } from 'react';
import axios from 'axios';
import { MessageRequest } from '@/types';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function MessageCreateView() {
    const [content, setContent] = useState<MessageRequest>({
        content: ""
    });
    const [result, setResult] = useState<{
        status: number;
    }>({
        status: 0
    });
    const onSubmit = async () => {
        const resp = await axios.post('/api/messages', {
            ...content
        });
        setResult({
            status: resp.status
        });
        if(resp.status === 201)
            setContent({
                content: ""
            })
    }
    return (
        <AppHeaderLayout>
            <div className="mx-auto mt-5 w-full max-w-3xl space-y-6">
                <Card className="mx-auto mt-5 w-full max-w-3xl">
                    <CardHeader>
                        <CardTitle>New contact message</CardTitle>
                        <CardDescription>Write something for us!</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form
                            className="space-y-6"
                            onSubmit={async (e) => {
                                e.preventDefault();
                                await onSubmit();
                            }}
                        >
                            <div className="space-y-2">
                                <Textarea
                                    required
                                    maxLength={500}
                                    placeholder="Describe your issue, question or feedback..."
                                    className="min-h-[220px] resize-y rounded-xl px-4 py-3 text-sm"
                                    onChange={(e) =>
                                        setContent({
                                            content: e.currentTarget.value,
                                        })
                                    }
                                />

                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>Maximum 500 characters</span>
                                    <span>{content.content.length ?? 0}/500</span>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <Button type="submit" className="min-w-32">
                                    Send message
                                </Button>
                            </div>

                            <div className="rounded-xl border bg-muted/40 p-4 text-sm text-muted-foreground">
                                Your message will be visible to administrators and may be used for communication regarding inventions, inventors or
                                platform related issues. Please provide as much detail as possible.
                            </div>
                        </form>
                    </CardContent>
                </Card>
                {result.status === 201 && (
                    <Card className="border-green-500/30 bg-green-500/5">
                        <CardContent className="flex items-center justify-between py-4">
                            <div>
                                <p className="font-medium text-green-700 dark:text-green-400">Inventor created successfully.</p>

                                <p className="text-sm text-muted-foreground">The inventor has been added to the database.</p>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AppHeaderLayout>
    );
}
