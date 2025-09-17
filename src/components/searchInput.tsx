import { RiSearchLine } from '@remixicon/react'
import { type ChangeEvent, useId } from 'react'

type SearchInputProps = {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export default function SearchInput(props: SearchInputProps) {
  const id = useId()

  return (
    <div className="relative h-full">
      <div className="pointer-events-none absolute top-0 bottom-0 left-4  flex justify-center items-center flex-col">
        <div className="flex items-center gap-2 text-gray-400">
          <RiSearchLine size={18} />
          <label
            htmlFor={id}
            className={` ${props.value.length > 0 && 'hidden'}`}
          >
            Recherche
          </label>
        </div>
      </div>

      <input
        id={id}
        type="search"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        className="border border-gray-300 p-3 pl-10 px-4 w-full rounded-2xl  h-full block"
      />
    </div>
  )
}
