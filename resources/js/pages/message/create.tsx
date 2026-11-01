import { Button } from '@/components/ui/button';
import { Textarea } from '@headlessui/react';
import { useRef, useState } from 'react';
import axios from 'axios';
import { MessageRequest, ValidationError } from '@/types';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import error from 'eslint-plugin-react/lib/util/error';
import { devNull } from 'node:os';

export default function MessageCreateView() {
    const [content, setContent] = useState<MessageRequest>({
        content: ""
    });
    const [result, setResult] = useState<{
        status: number,
        error: ValidationError | null
    }>({
        status: 0,
        error: null
    });
    const onSubmit = async () => {
        const resp = await axios.post('/api/messages', {
            ...content
        }, {
            validateStatus: (status) => status === 201 || status === 422,
        });
        if(resp.status === 201) {
            setResult({
                status: resp.status,
                error: null
            })
            setContent({
                content: '',
            });
        }
        else if(resp.status == 422)
            setResult({
                status: resp.status,
                error: resp.data
            });
    }
    return (
        <AppHeaderLayout>
            <div className="mx-auto mt-5 w-full max-w-3xl space-y-6">
                {result.status === 201 && (
                    <Card className="border-green-500/30 bg-green-500/5">
                        <CardContent className="flex items-center justify-between py-4">
                            <div>
                                <p className="font-medium text-green-700 dark:text-green-400">Message created successfully.</p>
                            </div>
                        </CardContent>
                    </Card>
                )}
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
                            {result.error && (
                                <Card className="border-red-500/30 bg-red-500/5">
                                    <CardContent className="flex items-center justify-between py-4">
                                        <div>
                                            {Object.entries(result.error.errors).map(([key, value]) => (
                                                <p className="font-medium text-red-700 dark:text-red-400">{value}</p>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                            <div className="space-y-2">
                                <Textarea
                                    maxLength={500}
                                    placeholder="Describe your issue, question or feedback..."
                                    className="min-h-[220px] resize-y rounded-xl px-4 py-3 text-sm"
                                    onChange={(e) =>
                                        setContent({
                                            content: e.currentTarget.value,
                                        })
                                    }
                                    value={content.content}
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
            </div>
        </AppHeaderLayout>
    );
}
