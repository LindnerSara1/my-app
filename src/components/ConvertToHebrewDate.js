import {
  formatJewishDateInHebrew,
  toHebrewJewishDate,
  toJewishDate,
} from "jewish-date";
const convertToHebrewDate = (date) => {
  console.log(date+"convertToHebrewDate");
  const newdate = new Date(Date.parse(date));
  const jewishDate = toJewishDate(newdate);
  const jewishDateInHebrewStr = formatJewishDateInHebrew(jewishDate);
  return jewishDateInHebrewStr;
  // console.log(date);
  // const newDate = new Date("2020-01-01");
  // console.log(newDate);
  // const jewishDate = toJewishDate(newDate);
  // console.log( "formatJewishDateInHebrew"+ formatJewishDateInHebrew(jewishDate));
  // const strtoHebrewJewishDate = toHebrewJewishDate(jewishDate);
  // console.log( "toHebrewJewishDate"+ strtoHebrewJewishDate.day+strtoHebrewJewishDate.monthName);
  // return formatJewishDateInHebrew;
};
export default convertToHebrewDate;
// import {
//     toJewishDate, formatJewishDate, toHebrewJewishDate, formatJewishDateInHebrew, toGregorianDate, JewishMonth
//   } from "jewish-date";

//   const date = new Date("2020-01-01");
//   const jewishDate = toJewishDate(date);
//   console.log(jewishDate); // { year: 5780, monthName: "Tevet", month: 4, day: 4 }

//   const jewishDateInEnglish = formatJewishDate(jewishDate);
//   console.log(jewishDateInEnglish); // 4 Tevet 5780

//   const jewishDateInHebrew = toHebrewJewishDate(jewishDate);
//   console.log(jewishDateInHebrew); // { day: "ד׳", monthName: "טבת", year: "התש״פ" }

//   const jewishDateInHebrewStr = formatJewishDateInHebrew(jewishDate);
//   console.log(jewishDateInHebrewStr);
// ד׳ טבת התש״פ

//   const date2 = toGregorianDate({ year: 5780, monthName: JewishMonth.Tevet, day: 4 });
//   console.log(date2); // Wed Jan 01 2020 00:00:00 GMT+0200 (Israel Standard Time)
