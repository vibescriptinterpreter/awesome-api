export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export enum SecondLevelCategory {
  Area,
  Tools,
}

export class TopPageModel {
  topLevelCategory: TopLevelCategory;
  secondLevelCategory: SecondLevelCategory;
  title: string;
  category: string;
  // @TODO: Разделить интерфейсы для страниц, тк jobs используется только для Курсов
  jobs?: {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
  };
  advantages: {
    title: string;
    description: string;
  }[];
  seoText: string;
  tagsTitle: string;
  tags: string[];
}
