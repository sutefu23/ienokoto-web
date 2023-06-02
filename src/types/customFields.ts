export type StaffCustomField = {
  last_name: string;
  first_name: string;
  department: string;
  titles: {
    title: string;
  }[];
  image: string;
  doing?: string;
  preferance?: string;
  want_to_tell?: string;
  extra_content?: {
    title: string;
    content: string;
  };
  staff_card?: {
    image: string;
    message: string;
  };
};

export type ReformStoryCustomField = {
  catch_copy: string;
  spec_overview: string;
  main_image: string;
  cost?: number;
  area?: number;
  building?: string;
  overview_title?: string;
  overview_description?: string;
  garally?: {
    image: ACFImage;
    description: string;
  }[];
  using_material?: string;
  staff: number[];
  customer_voice: string;
  staff_comment: string;
} & ReformFlow;

export type ReformFlow = {
  flow_start: {
    date: string; //yyyymmdd
    customer_image: string;
    customer_comment: string;
  };
  ienokoto_proposal: string;
  flow_fix: {
    date: string;
    image: string;
    content: string;
  };
  flow_construction_start_date: string;
  flow_completed_date: string;
};

export interface ACFImage {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: { [key: string]: string | number };
}
