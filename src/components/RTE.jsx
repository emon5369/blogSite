import { Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react'

export default function RTE({ name, label, control, defaultValue = "" }) {
    return (
        <div className="w-full">
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

            <Controller
                name={name || "Content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        apiKey='lshje80f9xedqyfptp6amn1wv003lk4l1ht3vql1gx8q1ia2'
                        initialValue={defaultValue}
                        init={{
                            initialValue: defaultValue,
                            placeholder:"Write your thoughts here...",
                            height: 400,
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                            ],
                            toolbar:
                                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}