'use client'

import React from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
  } from "@/components/ui/form";
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { UserValidation } from '@/lib/validation/user';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import * as z from "zod";

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

const AccountProfile = ({user, btnTitle}:Props) => {
    const form = useForm<z.infer<typeof UserValidation>>({
        resolver: zodResolver(UserValidation),
        defaultValues: {
          profile_photo: user?.image ? user.image : "",
          name: user?.name ? user.name : "",
          username: user?.username ? user.username : "",
          bio: user?.bio ? user.bio : "",
        },
      });

    function onSubmit(values: z.infer<typeof UserValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}

export default AccountProfile