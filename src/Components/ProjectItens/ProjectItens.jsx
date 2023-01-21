import React, { useEffect } from 'react'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { Modal, ProjectItem } from './style'

const ProjectItens = ({template,name,icon1,icon2,icon3,icon4}) => {    

  const [openModal,setOpenModal] = useState(false)
  useEffect(() => {
    document.body.style.overflowY = openModal ? 'hidden' : 'auto'
    }, [openModal])
  return (
    <div>
      <ProjectItem>
        <img src={template} alt="" />
        <div className='projectType'>
          <h2>{name}</h2>
          <div>
              {icon1}
          </div>          
        </div>
        <div className='infoProject'>
        <h2>{name}</h2>
        <button onClick={()=> setOpenModal(!openModal)} >Saiba mais</button>
        </div>            
    </ProjectItem>
    <Modal isOpen={openModal}>
      <div>
        <IoClose size={45} onClick={()=> setOpenModal(!openModal)}/>
          <img src={template} alt="" />
          <h2>{name}</h2>
      </div>
    </Modal>
    </div>
  )
}

export default ProjectItens