// server model
export interface Article_Model {
  id: string;
  title: string;
  author: string;
  summary: string;
  content: string;
  thumbnail: string;
}

// client viewmodels
export type ArticlePage_VModel = Pick<Article_Model, 'title' | 'author' | 'content'>;
export type ArticleCard_VModel = Pick<Article_Model, 'title' | 'author' | 'summary' | 'thumbnail'>;

// transformers
export const toArticlePage = ({ title, author, content }: Article_Model): ArticlePage_VModel => ({
  title,
  author,
  content,
});

export const toArticleCards = (articles: Article_Model[]): ArticleCard_VModel[] =>
  articles.map(({ title, author, summary, thumbnail }: Article_Model) => ({
    title,
    author,
    summary,
    thumbnail,
  }));
