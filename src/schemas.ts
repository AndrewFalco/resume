import * as yup from "yup";

export const WpSch = yup.object().shape({
    startDate: yup.date().default(function () {
        return new Date();
      }).required(),
    endDate: yup.mixed().default(function () {
        return new Date();
      }).optional(),
    toPresent: yup.boolean().optional(),
    companyName: yup.string().required(),
    position: yup.string().required(),
    cases: yup.string().optional(),
});

export const Page2Sch = yup.object().shape({
  hasExp: yup.string().required(),
})

export const LangSch = yup.object().shape({
    language: yup.string().required(),
    level: yup.string().required(),
});

export const SchoolSch = yup.object().shape({
    name: yup.string().required(),
    faculty: yup.string().required(),
    speciality: yup.string().required(),
    endYear: yup.number().positive().integer().required(),
});

export const EduSch = yup.object().shape({
    level: yup.string().required(),
    language: yup.string().required(),
    otherLanguage: yup.array().of(LangSch).optional(),
    placeOfStudy: yup.array().of(SchoolSch).required(),
})

export const MainSch = yup.object().shape({
  name: yup.string().required(),
  lastName: yup.string().required(),
  patronymic: yup.string().optional(),
  photo: yup.string().optional(),
  city: yup.string().required(),
  birthDate: yup.date().default(function () {
    return new Date();
  }).required(),
  gender: yup.string().required(),
  citizen: yup.string().required(),
  position: yup.string().required(),
  salary: yup.number().required().positive().integer(),
  currency: yup.string().required(),
  about: yup.string().optional(),
});

