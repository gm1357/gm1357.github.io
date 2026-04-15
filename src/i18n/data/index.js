import * as resumeEn from "./resume.en";
import * as resumePtBr from "./resume.pt-br";
import projectsEn from "./projects.en";
import projectsPtBr from "./projects.pt-br";

const data = {
  en: {
    resume: resumeEn,
    projects: projectsEn,
  },
  "pt-br": {
    resume: resumePtBr,
    projects: projectsPtBr,
  },
};

export function getLocalizedData(lang) {
  return data[lang] || data.en;
}
