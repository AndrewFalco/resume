export type IResume = {
    id: string;
    name: string;
    lastName: string;
    patronymic?: string;
    photo?: string;
    city: string;
    birthDate: Date;
    gender: string;
    citizen: string;
    position: string;
    salary: number;
    currency: string;
    about?: string;
    hasExp: boolean;
    workplace?: IWorkplace[];
    education: IEducation[];

}

type IWorkplace ={
    startDate: Date;
    endDate?: Date;
    toPresent?: boolean;
    companyName: string;
    position: string;
    cases?: string;
}

type IEducation ={
    level: string;
    language: string;
    otherLanguage?: ILanguage[];
    placeOfStudy: ISchool[];
}

type ILanguage = {
    language: string;
    level: string;
}

type ISchool = {
    name: string;
    faculty: string;
    speciality: string;
    endYear: number;
}
