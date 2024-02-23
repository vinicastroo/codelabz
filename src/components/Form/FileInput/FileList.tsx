'use client'

import { FileItem } from './FileItem'
import { useFileInput } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export function FileList() {
  const { files } = useFileInput()
  const [animationParent] = useAutoAnimate()

  return (
    <div className="mt-4 space-y-3" ref={animationParent}>
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            size={file.size}
            name={file.name}
            type={file.type}
            state="complete"
          />
        )
      })}
    </div>
  )
}
