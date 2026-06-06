export interface ArticleContent {
  en: string;
  zh: string;
}

export interface ArticleSection {
  title: ArticleContent;
  content: ArticleContent[]; // Array of bilingual paragraphs
}

export interface Article {
  id: string;
  title: ArticleContent;
  excerpt: ArticleContent;
  category: ArticleContent;
  bannerImage: string;
  publishDate: string;
  readTime: string; // e.g., "5 min read"
  sections: ArticleSection[];
}
