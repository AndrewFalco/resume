import { Button, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import React from 'react'

import '../../styles/style.scss'
import { IResume } from '../../types';

interface IProps {
    setOpen: any;
    open: boolean;
    resume: IResume;
}
const Preview = (props: IProps) => {
    const { setOpen, open, resume } = props;

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog fullScreen open={open} onClose={handleClose}>
            <DialogTitle>Резюме</DialogTitle>
            <DialogContent>
                <div className="flex_items">
                    {resume.photo && <img className="card_img" src={resume.photo} alt="Photo" />}
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {`${resume.name} ${resume.lastName} ${resume.patronymic}`}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            <div><b>Город проживания:</b> {resume.city}</div>
                            <div><b>Дата рождения:</b> {resume.birthDate.toISOString().split('T')[0]}</div>
                            <div><b>Пол:</b> {resume.gender}</div>
                            <div><b>Гражданство:</b> {resume.citizen}</div>
                            <div><b>Желаемая должность:</b> {resume.position}</div>
                            <div><b>Зарплата (с выбором валюты):</b> {resume.salary} {resume.currency} </div>
                            <div><b>О себе:</b> {resume.about}</div>
                        </Typography>
                        <br />
                        <Typography gutterBottom variant="h5" component="div">
                            Опыт работы
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {!resume.hasExp ?
                                <div><b>Нет опыта</b></div> :
                                resume.workplace !== undefined && resume.workplace?.length>0 && resume.workplace.map(el => {
                                    return <div>
                                        <div><b>Дата начала:</b> {el.startDate.toISOString().split('T')[0]}</div>
                                        {el.toPresent ?
                                            <div><b>По настоящее время</b></div> :
                                            <div><b>Дата окончания:</b> {el.endDate?.toISOString().split('T')[0]}</div>}
                                        <div><b>Наименование организации:</b> {el.companyName}</div>
                                        <div><b>Должность:</b> {el.position}</div>
                                        <div><b>Обязанности:</b> {el.cases}</div>
                                    </div>
                                })
                            }
                        </Typography>
                        <br/>  
                        <Typography gutterBottom variant="h5" component="div">
                            Образование
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {resume.education !== undefined && resume.education?.length>0 && resume.education.map(el => {
                                return <div>
                                    <div><b>Уровень:</b> {el.level}</div>
                                    <div><b>Родной язык:</b> {el.language}</div>
                                    <br/>
                                    {el.otherLanguage !== undefined && el.otherLanguage?.length > 0 ?
                                        <div><Typography gutterBottom variant="h5" component="div">
                                            Иностранные языки
                                        </Typography>
                                            {el.otherLanguage.map(lang => {
                                                return <div><b>Язык:</b> {lang.language} <b>Уровень:</b> {lang.level}</div>
                                            })}
                                        </div>
                                        : null
                                    }
                                    <br/>
                                    {el.placeOfStudy !== undefined && el.placeOfStudy?.length > 0 ?
                                        <div><Typography gutterBottom variant="h5" component="div">
                                            Мeста обучения
                                        </Typography>
                                            {el.placeOfStudy.map(place => {
                                                return <div>
                                                    <div><b>Наименование:</b> {place.name}</div>
                                                    <div><b>Факультет:</b> {place.faculty}</div>
                                                    <div><b>Специальность:</b> {place.speciality}</div>
                                                    <div><b>Год окончания:</b> {place.endYear}</div>
                                                </div>
                                            })
                                            }
                                        </div>
                                        : null
                                    }
                                </div>
                            })
                            }
                        </Typography>
                    </CardContent>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Preview
