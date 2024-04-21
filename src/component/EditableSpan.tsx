import React, { ChangeEvent, useState } from 'react'
import TextField from '@mui/material/TextField'
import CreateIcon from '@mui/icons-material/Create'
import ModalComp from './ModalComp'
import { TaskType } from './Todoist'
type EditableSpanPropsType = {
	value: string
	onChange: (newValue: string) => void
	task?: TaskType
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {
	let [editMode, setEditMode] = useState(false)
	let [title, setTitle] = useState(props.value)

	let [openModal, setOpenModal] = useState(false)
	const activateEditMode = () => {
		setEditMode(true)
		setTitle(props.value)
	}
	const activateViewMode = () => {
		setEditMode(false)
		props.onChange(title)
	}
	const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value)
	}

	return editMode ? (
		<TextField
			value={title}
			onChange={changeTitle}
			autoFocus
			onBlur={activateViewMode}
		/>
	) : (
		<span onDoubleClick={activateEditMode}>
			{props.value}

			{props.task && (
				<>
					<span onClick={() => setOpenModal(true)}>
						<CreateIcon fontSize='inherit' />
					</span>
					<ModalComp setOpenModal={setOpenModal} openModal={openModal} />
				</>
			)}
		</span>
	)
})
