export interface Hero {
  _type: string;
  _id: string;
  _updatedAt: string;
  heading_end: string;
  cta: string;
  heading_start: string;
  paragraph: string;
  heading_middle: string;
  _createdAt: string;
  _rev: string;
}

export interface Counter {
  _updatedAt: string;
  lessons: number;
  courses: number;
  hours: number;
  _createdAt: string;
  _rev: string;
  _type: string;
  _id: string;
}

export interface Pricing {
  _createdAt: string;
  _id: string;
  bullet_2: string;
  bullet_3: string;
  bullet_5: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  bullet_1: string;
  bullet_4: string;
}
