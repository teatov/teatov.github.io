export const languages = {
  en: 'EN',
  ru: 'RU',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.about': 'about',
    'nav.skills': 'skills',
    'nav.experience': 'experience',
    'nav.education': 'education',
    'nav.projects': 'projects',
    'nav.contact': 'contact',
    'footer.copyright': 'thanks',
    'hero.hi': 'hi',
    'hero.im': "I'm Anatoly",
    'hero.title1': 'a fullstack web developer',
    'hero.title2': 'a hobbyist game developer',
    'hero.title3': 'and a good code enjoyer',
    'skills.meansLove': 'means love',
    'experience.header': 'my experience',
    'education.header': 'education',
    'projects.header': 'I worked on',
    'contact.header': 'contact me',
  },
  ru: {
    'nav.about': 'обо мне',
    'nav.skills': 'навыки',
    'nav.experience': 'опыт',
    'nav.education': 'образование',
    'nav.projects': 'проекты',
    'nav.contact': 'связаться',
    'footer.copyright': 'спасибо',
    'hero.hi': 'при<br/>вет',
    'hero.im': 'я Анатолий',
    'hero.title1': 'фуллстак веб-разработчик',
    'hero.title2': 'энтузиаст-разработчик игр',
    'hero.title3': 'и любитель хорошего кода',
    'skills.meansLove': 'значит любовь',
    'experience.header': 'мой опыт',
    'education.header': 'образование',
    'projects.header': 'я работал над',
    'contact.header': 'связаться со мной',
  },
} as const;

export const info = {
  en: {
    'page.title': 'Anatoly Titov - fullstack web developer',
    'project1.title': "My Univer: FEFU's personal account service.",
    'project1.alt': 'a screenshot of the My Univer website',
    'project2.title':
      'A geodesy survey card generator/database for FEFU. Made as a study project.',
    'project2.alt': 'A screenshot of the geodesy survey card website',
    'project3.title':
      'Cookery: a website for sharing food recipes. Made as a study project.',
    'project3.alt': 'A screenshot of the Cookery website',
    'skill1.title': 'languages',
    'skill2.title': 'frameworks',
    'skill3.title': 'obvious',
    'skill4.title': 'misc',
    'experience1.title': 'Far Eastern Federal University',
    'experience1.job': 'Junior web developer',
    'experience1.timeSpan': 'December 2022 - present',
    'experience1.description':
      "Supporting and extending on My Univer - FEFU's personal account service.",
    'experience1.bullet1': 'Backend with PHP, Yii2, MariaDB',
    'experience1.bullet2': 'Frontend with Vue, jQuery and Bootstrap',
    'experience1.bullet3': 'Tests with Codeception',
    'education.university': 'Far Eastern Federal University',
    'education.title': 'Applied Computer Science in Design',
    'education.description': 'Bachelor\'s degree',
  },
  ru: {
    'page.title': 'Анатолий Титов - фуллстак веб-разработчик',
    'project1.title': 'Мой универ: Сервис личной учётной записи ДВФУ.',
    'project1.alt': 'Скриншот сайта Мой Универ',
    'project2.title':
      'Генератор/база данных геодезических карточек обследования для ДВФУ. Курсовой проект.',
    'project2.alt': 'Скриншот сайта с геодезическими карточками обследования',
    'project3.title': 'Cookery: сайт для рецептов блюд. Курсовой проект.',
    'project3.alt': 'Скриншот сайта Cookery',
    'skill1.title': 'языки',
    'skill2.title': 'фреймворки',
    'skill3.title': 'разумеется',
    'skill4.title': 'прочее',
    'experience1.title': 'Дальневосточный Федеральный Университет',
    'experience1.job': 'Младший веб-разработчик',
    'experience1.timeSpan': 'декабрь 2022 - до сих пор',
    'experience1.description':
      'Занимаюсь поддержкой и расширением сайта Мой универ - сервиса личной учётной записи ДВФУ.',
    'experience1.bullet1': 'Бэкенд с PHP, Yii2, MariaDB',
    'experience1.bullet2': 'Фронтенд с Vue, jQuery и Bootstrap',
    'experience1.bullet3': 'Тесты с Codeception',
    'education.university': 'Дальневосточный Федеральный Университет',
    'education.title': 'Прикладная информатика в компьютерном дизайне',
    'education.description': 'Бакалавриат',
  },
} as const;

export const i18n = {
  en: {
    ...ui.en,
    ...info.en,
  },
  ru: {
    ...ui.ru,
    ...info.ru,
  },
} as const;
