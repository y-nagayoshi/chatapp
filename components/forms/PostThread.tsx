'use client'

import React, { ChangeEvent } from 'react'
import Image from 'next/image';
import { useState } from 'react';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
  } from "@/components/ui/form";

import { Textarea } from '../ui/textarea';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { UserValidation } from '@/lib/validation/user';
import { ThreadValidation } from '@/lib/validation/thread';
import { Button } from "@/components/ui/button"

import { isBase64Image } from '@/lib/utils';

import { useUploadThing } from '@/lib/uploadthing';

import { updateUser } from '@/lib/actions/user.actions';

import * as z from "zod";
import { usePathname, useRouter } from 'next/navigation';

interface Props {
    user: {
        id: string;
        objectID: string;
        username: string;
        name: string;
        bio: string;
        image: string;
    }
    btnTitle: string;
}

    const PostThread = ({userId}:{userId:string}) => {
        const form = useForm<z.infer<typeof ThreadValidation>>({
            resolver: zodResolver(ThreadValidation),
            defaultValues: {
                thread: '',
                accountId: userId,
            },
        }
    );
    
    const router = useRouter();
    const pathname = usePathname();

    const onSubmit = () => {
        
    }

    return (
        <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="flex flex-col justify-start gap-10"
        >

        <FormField
            control={form.control}
            name="thread"
            render={({ field }) => (
            <FormItem className='flex flex-col gap-3 w-full'>
                <FormLabel className='text-base-semibold text-light-2'>
                content
                </FormLabel>
                <FormControl className='no-focus border border-dark-4 bg-dark-3 text-light-1'>
                <Textarea
                    rows={15}
                    {...field}
                />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />

        <Button type='submit' className='bg-primary-500'>post thread</Button>

        </form>
        </Form>
    )
}

export default PostThread