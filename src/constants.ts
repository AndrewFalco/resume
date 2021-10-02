import { v4 as uuid } from "uuid";
import { IResume } from "./types";

export const defaultRes: IResume = {
  id: uuid(),
  name: "",
  lastName: "",
  patronymic: "",
  photo: "",
  city: "",
  birthDate: new Date(),
  gender: "male",
  citizen: "",
  position: "",
  salary: 0,
  currency: "rub",
  about: "",
  hasExp: true,
  workplace: [
    {
      startDate: new Date(),
      endDate: new Date(),
      toPresent: true,
      companyName: "",
      position: "",
      cases: "",
    },
  ],
  education: [
    {
      level: "",
      language: "",
      otherLanguage: [
        {
          language: "",
          level: "",
        },
      ],
      placeOfStudy: [
        {
          name: "",
          faculty: "",
          speciality: "",
          endYear: 2000,
        },
      ],
    },
  ],
};
