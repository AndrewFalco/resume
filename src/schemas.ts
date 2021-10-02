import * as yup from "yup";

export let wpSch = yup.object().shape({
    startDate: yup.date().default(function () {
        return new Date();
      }).required(),
    endDate: yup.date().default(function () {
        return new Date();
      }).optional(),
    toPresent: yup.boolean().optional(),
    companyName: yup.string().required(),
    position: yup.string().required(),
    cases: yup.string().optional(),
});

export let langSch = yup.object().shape({
    language: yup.string().required(),
    level: yup.string().required(),
});

export let schoolSch = yup.object().shape({
    name: yup.string().required(),
    faculty: yup.string().required(),
    speciality: yup.string().required(),
    endYear: yup.number().positive().integer().required(),
});

export let eduSch = yup.object().shape({
    level: yup.string().required(),
    language: yup.string().required(),
    otherLanguage: yup.array().of(langSch).optional(),
    placeOfStudy: yup.array().of(schoolSch).required(),
})

export let mainSch = yup.object().shape({
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

