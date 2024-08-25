import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Input, Select, Button, RTE } from './index'
import service from '../appwrite/config'
import { useCallback, useEffect, useState } from 'react'

function PostForm({ post }) {
    const { register, handleSubmit, watch, control, setValue, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || "active"
        }
    })

    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async (data) => {
        setIsSubmitting(true); // Set to true when the form submission starts
        try {
            if (post) {
                const file = data.image[0] ? await service.uploadFile(data.image[0]) : null; // Wait for file upload
                if (file) {
                    await service.deleteFile(post.featuredImage);
                }

                const dbPost = await service.updatePost(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : undefined
                });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                const file = await service.uploadFile(data.image[0]);
                if (file) {
                    const fileId = file.$id;
                    data.featuredImage = fileId;
                    const dbPost = await service.createPost({
                        ...data,
                        userId: userData.$id
                    });

                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`);
                    }
                }
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false); // Set to false when the submission ends
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            //two ways:

            const slug = value.toLowerCase().replace(/ /g, '-')
            setValue('slug', slug)
            return slug;

            // return value.trim().toLowerCase()
            //     .replace(/[^a-zA-Z\d\s]+/g, '-')
            //     .replace(/\s/g, '-')              //can use one replace
        }
    }, [])

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title, { shouldValidate: true }))
            }
        })
        return () => {
            subscription.unsubscribe()
        }
    }, [watch, setValue, slugTransform]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="sm:w-2/3 px-2 w-full">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}    //name=title
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value),
                            { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control}
                    defaultValue={getValues("content")} />
            </div>
            <div className="sm:w-1/3 px-2 w-full">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={service.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    defaultValue="active"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {isSubmitting? "Submitting..." : post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm