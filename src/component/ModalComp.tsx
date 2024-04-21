import Box from '@mui/material/Box'

import s from './ModalComp.module.css'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import TextField from '@mui/material/TextField'

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
}

type Props = {
	openModal: boolean
	setOpenModal: any
}

export default function ModalComp({ openModal, setOpenModal }: Props) {
	const handleClose = () => setOpenModal(false)

	let [titleDesc, setTitleDesc] = useState('')

	const changeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitleDesc(e.currentTarget.value)
	}
	return (
		<>
			<Modal
				open={openModal}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<TextField
						label={'Описание задачи'}
						className={s.textField}
						variant='filled'
						value={titleDesc}
						onChange={changeDesc}
						autoFocus
					/>
				</Box>
			</Modal>
		</>
	)
}
