'use client'

import React, { ChangeEvent } from 'react'
import Image from 'next/image';
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

    const handleImage = (e: ChangeEvent, fieldChange: (value: string) => void) => {
      e.preventDefault();
    }

    function onSubmit(values: z.infer<typeof UserValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values)
    }
  return (
    <Form {...form}>
    <form 
      onSubmit={form.handleSubmit(onSubmit)} 
      className="flex flex-col justify-start gap-10"
    >
      <FormField
        control={form.control}
        name="profile_photo"
        render={({ field }) => (
          <FormItem className='flex items-center gap-4'>
            {/* <FormLabel className='account-form_image-label'> */}
            <FormLabel>
              {
                field.value ? (
                  <Image 
                    src={field.value}
                    alt='profile photo'
                    width={96}
                    height={96}
                    priority
                    className='rounded-full object-contain'
                  />
                ) : (
                  <Image 
                    src='/assets/profile.svg'
                    alt='profile photo'
                    width={24}
                    height={24}
                    priority
                    className='object-contain'
                  />
                )
              }
            </FormLabel>
            <FormControl className='flex-1 text-base-semibold text-gray-200'>
              <Input 
                placeholder='upload a photo'
                accept='image/*'
                className='account-form_image-input'
                onChange={(e) => handleImage(e, field.onChange)}  
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem className='flex items-center gap-3 w-full'>
            <FormLabel className='text-base-semibold text-light-2'>
              Name
            </FormLabel>
            <FormControl className='flex-1 text-base-semibold text-gray-200'>
              <Input 
                type='text'
                className='account-form_input no-focus'
                onChange={(e) => handleImage(e, field.onChange)}  
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem className='flex items-center gap-3 w-full'>
            <FormLabel className='text-base-semibold text-light-2'>
              Username
            </FormLabel>
            <FormControl className='flex-1 text-base-semibold text-gray-200'>
              <Input 
                type='text'
                className='account-form_input no-focus'
                onChange={(e) => handleImage(e, field.onChange)}  
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="bio"
        render={({ field }) => (
          <FormItem className='flex items-center gap-3 w-full'>
            <FormLabel className='text-base-semibold text-light-2'>
              Bio
            </FormLabel>
            <FormControl className='flex-1 text-base-semibold text-gray-200'>
              <Textarea
                rows={10}
                className='account-form_input no-focus'
                onChange={(e) => handleImage(e, field.onChange)}  
              />
            </FormControl>
          </FormItem>
        )}
      />


      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}

export default AccountProfile