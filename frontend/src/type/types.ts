export interface Posting {
  id: number;
  title: string;
  company: string;
  deadline: string;
  imageUrl: string;
}

export interface PostingDetail extends Posting {
  description: string;
  originalLink: string;
}

export interface PostingForm {
  originalLink: string;
  title: string;
  company: string;
  description: string;
  deadline: string;
}