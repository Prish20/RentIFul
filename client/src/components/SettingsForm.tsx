import { SettingsFormData, settingsSchema } from '@/lib/schemas';
import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from './ui/form';
import { CustomFormField } from './FormField';
import { Button } from './ui/button';

const SettingsForm = (
    {
        initialData,
        onSubmit,
        userType
    }: SettingsFormProps) => {
    const [editMode, setEditMode] = useState(false);
    const form = useForm<SettingsFormData>({
        resolver: zodResolver(settingsSchema),
        defaultValues: initialData,
    })

    const toggleEditMode = () => {
        setEditMode(!editMode);
        if (editMode) {
            form.reset(initialData);

        }
    }

    const handleSubmit = async (data: SettingsFormData) => {
        await onSubmit(data);
        setEditMode(false);
    }
    return (
        <div className="pt-8 pb-5 px-16">
            <div className="mb-5">
                <h1 className="text-xl font-semibold">
                    {`${userType.charAt(0).toUpperCase() + userType.slice(1)} Settings`}
                </h1>
                <p className="text-small text-gray-500 mt-1">
                    Manage your account preferences and personal information.
                </p>
            </div>
            <div className="bg-primary-700/20 rounded-xl py-12">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="space-y-12 items-center flex gap-4 flex-col"
                    >
                        <CustomFormField name="name" label="Name" disabled={!editMode} className=" md:w-2/3 lg:w-1/2" />
                        <CustomFormField name="email" label="Email" type="email" className=" md:w-2/3 lg:w-1/2" disabled={!editMode} />
                        <CustomFormField name="phoneNumber" className=" md:w-2/3 lg:w-1/2" label="Phone Number" disabled={!editMode} />
                        <div className="pt-4 flex justify-between gap-4 md:w-2/3 lg:w-1/2">
                            <Button type="button" onClick={toggleEditMode}
                                className="bg-secondary-500 text-white hover:bg-secondary-600">
                                {editMode ? "Cancel" : "Edit"}
                            </Button>
                            {editMode && (
                                <Button type="submit" className="bg-primary-700 text-white hover:bg-primary-800">
                                    Save Changes
                                </Button>
                            )}
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default SettingsForm
