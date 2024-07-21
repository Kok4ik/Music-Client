
import React, { FC, useRef } from 'react'
interface FileUploadProps {
    setFile: Function
    accept: string
    children: React.ReactNode
}

const FileUpload: FC<FileUploadProps> = ({setFile, accept, children}) => {
    const ref = useRef<HTMLInputElement>(null)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files
        setFile(file ? file[0] : '')
    }

    return (
        <div onClick={() => ref.current?.click()}>
            <input type={'file'}
                accept={accept}
                style={{display: 'none'}}
                ref={ref}
                onChange={onChange}
            />
            {children}
        </div>
    )
}

export default FileUpload