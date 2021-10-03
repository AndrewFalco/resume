import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { MainSch } from '../schemas'
import * as yup from 'yup'

import "../styles/style.scss"
import Photo from '../components/UI/Photo';
import { IResume } from '../types'
import MyInput from '../components/UI/MyInput'
import MyTextField from '../components/UI/MyTextField'
import MyDateField from '../components/UI/MyDateField'
import { useHistory } from 'react-router'
import Select from '../components/UI/Select'
import { currencies, genders } from '../constants'

const Page1 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IResume>({
        resolver: yupResolver<yup.AnyObjectSchema>(MainSch),
        mode: "onBlur"
    });

    const history = useHistory();

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
        history.push('/page2')
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Step 1</h1>
            <div className="flex_form">
                <div className="flex_items">
                    <Photo />
                    <div>
                        <MyInput property="name" alias="Имя" register={register} errors={errors} isRequired={true} />
                        <MyInput property="lastName" alias="Фамилия" register={register} errors={errors} isRequired={true} />
                        <MyInput property="patronymic" alias="Отчество" register={register} errors={errors} isRequired={false} />
                    </div>
                </div>
                <div className="flex_items">
                    <MyInput property="city" alias="Город проживания" register={register} errors={errors} isRequired={true} />
                    <MyDateField property="birthDate" alias="Дата рождения" register={register} errors={errors} isRequired={true} />
                </div>
                <div className="flex_items">
                    <Select property="gender" alias="Пол" register={register} errors={errors} options={genders} isRequired={true}/>
                    <MyInput property="citizen" alias="Гражданство" register={register} errors={errors} isRequired={true} />
                </div>
                <div className="flex_items">
                    <MyInput property="position" alias="Желаемая должность" register={register} errors={errors} isRequired={true} />
                    <MyInput property="salary" alias="Желаемая зарплата" register={register} errors={errors} isRequired={true} type="number" />
                    <Select property="currency" alias="Валюта" register={register} errors={errors} options={currencies} />
                </div>
                <MyTextField property="about" alias="О себе" register={register} errors={errors} />
                <div className="next_page">
                    <input type="submit" value="to next page" />
                </div>
            </div>
        </form>
    );
}

export default Page1