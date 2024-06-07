export default defineEventHandler((e) => {
  const id = getRouterParam(e, 'id');

  if (!id) throw createError({ statusCode: 500 });

  return getArticleById(id);
});
