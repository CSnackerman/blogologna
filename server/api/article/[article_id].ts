import { getArticleById } from '~/server/utils/articles';

export default defineEventHandler((e) => {
  const article_id = getRouterParam(e, 'article_id');

  return getArticleById(article_id ?? 'invalid');
});
