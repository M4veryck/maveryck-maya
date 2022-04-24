/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import styles from '../../styles/Projects/Projects.module.scss'
import Modal from './modal'
import { NavBarContextConsumer } from '../navBarContext'
import useSlideFirstTime from '../hooks/useSlideFirstTime'

export default function Project(props) {
    const {
        id,
        imgSrc,
        imgWidth,
        imgHeight,
        imgAlt,
        projectTitle,
        projectDesc,
    } = props
    const modalRef = useRef()
    const [displayModal, setDisplayModal] = useState(false)

    function stylesModalDisplayed() {
        modalRef.current.style.display = 'block'
        document.getElementById(`modal-background${id}`).style.display = 'block'
        document.getElementById(`project--modal${id}`).style.display = 'grid'
        document.body.style.overflowY = 'hidden'
        document.documentElement.style.overflowY = 'hidden'
        document.getElementById('projects').style.zIndex = 9
    }

    function stylesModalHidden() {
        modalRef.current.style.display = 'none'
        document.getElementById(`modal-background${id}`).style.display = 'none'
        document.getElementById(`project--modal${id}`).style.display = 'none'
        document.body.style.overflowY = 'initial'
        document.documentElement.style.overflowY = 'initial'
        document.getElementById('projects').style.zIndex = 2
    }

    function closeModal() {
        setDisplayModal(false)
    }

    useEffect(() => {
        if (displayModal) {
            stylesModalDisplayed()
            return
        }
        stylesModalHidden()
    }, [displayModal])

    const projectRef = useRef()
    const projectAnimation = useSlideFirstTime(projectRef, {
        axis: 'y',
        overflow: '50%',
        reveal: true,
        revealAt: '0px',
    })

    return (
        <>
            <div
                className={styles['modal--container']}
                ref={modalRef}
                id={`modal--container${id}`}
            >
                <Modal {...props} closeModal={closeModal} />
            </div>

            <motion.article
                className={styles['project--article']}
                ref={projectRef}
                animate={projectAnimation}
            >
                <div className={styles['image--container']}>
                    <Image
                        src={imgSrc}
                        alt={imgAlt}
                        width={Number(imgWidth)}
                        height={Number(imgHeight)}
                        className={styles['project-image']}
                    />
                </div>
                <div className={styles['text--container']}>
                    <h3 className={styles['project-title']}>{projectTitle}</h3>

                    <p className={styles['project-description']}>
                        {projectDesc}
                    </p>

                    <div className={styles['links--container']}>
                        <button
                            className={styles['project-link']}
                            onClick={e => {
                                setDisplayModal(true)
                            }}
                        >
                            Open Preview
                        </button>
                    </div>
                </div>
            </motion.article>
        </>
    )
}
