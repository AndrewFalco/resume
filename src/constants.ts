import { v4 as uuid } from "uuid";

export const defaultRes = () => {
  return {
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
        level: "high1",
        language: "",
        otherLanguage: [
          {
            language: "",
            level: "A1",
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
};

export const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
  {
    value: "RUB",
    label: "₽",
  },
];

export const genders = [
  {
    value: "Male",
    label: "Муж",
  },
  {
    value: "Female",
    label: "Жен",
  },
];

export const education = [
  {
    value: "mid",
    label: "Среднее общее",
  },
  {
    value: "mid_pro",
    label: "Среднее профессиональное",
  },
  {
    value: "high1",
    label: "Высшее I степени (бакалавриат)",
  },
  {
    value: "high2",
    label: "Высшее II степени (специалитет, магистратура)",
  },
  {
    value: "high3",
    label: "Высшее III степени (высшая квалификация)",
  },
];

export const langLevel = [
  {
    value: "A1",
    label: "A1",
  },
  {
    value: "A2",
    label: "A2",
  },
  {
    value: "B1",
    label: "B1",
  },
  {
    value: "B2",
    label: "B2",
  },
  {
    value: "C1",
    label: "C1",
  },
  {
    value: "C2",
    label: "C2",
  },
];
