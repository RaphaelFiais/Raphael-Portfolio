import React, { useEffect } from 'react'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { Modal, ProjectItem } from './style'

const ProjectItens = ({ template, name,projeto,repositorio, description,icon1, icon2, icon3, icon4 }) => {

  const [openModal, setOpenModal] = useState(false)
  useEffect(() => {
    document.body.style.overflowY = openModal ? 'hidden' : 'auto'
  }, [openModal])

  window.addEventListener('keydown', (e) =>{
    if(e.key==="Escape"){
      setOpenModal(false)
    }
  })

  return (
    <div>
      <ProjectItem>
        <img src={template} alt="" />
        <div className='projectType'>
          <h2>{name}</h2>
          <div>
            {icon1}
            {icon2}
            {icon3}
          </div>
        </div>
        <div className='infoProject'>
          <h2>{name}</h2>
          <button onClick={() => setOpenModal(!openModal)} >Saiba mais</button>
        </div>
      </ProjectItem>
      <Modal isOpen={openModal}>
        <div className='infoModal'>
          <IoClose size={45} onClick={() => setOpenModal(!openModal)} />
          <img src={template} alt="" />
          <div className='description'>
            <h2>{name}</h2>
            <p>{description}</p>
            <div>
            {repositorio && <a href={repositorio} target="_Blank" >Repositorio</a>}
            <a href={projeto} target="_Blank">Site</a>
            </div>
            
          </div>          
        </div>
      </Modal>
    </div>
  )
}

export default ProjectItens