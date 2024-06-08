import type { Article_Model } from '~/types/models/article_models';

export function getArticleById(id: string): Article_Model {
  switch (id) {
    case ArticleBizarreBeliefs.id:
      return ArticleBizarreBeliefs;
    case ArticleJourneyIntoTheJungle.id:
      return ArticleJourneyIntoTheJungle;
    case ArticleMetaphysicalExperiments.id:
      return ArticleMetaphysicalExperiments;
    case ArticleGrowingUpGaming.id:
      return ArticleGrowingUpGaming;

    default:
      throw createError('invalid article id');
  }
}

export function getArticles(): Article_Model[] {
  return [
    ArticleBizarreBeliefs,
    ArticleJourneyIntoTheJungle,
    ArticleMetaphysicalExperiments,
    ArticleGrowingUpGaming,
  ];
}

const ArticleBizarreBeliefs: Article_Model = {
  id: 'bizarre-beliefs',
  title: 'Bizarre Beliefs',
  author: 'Col Ackerman',
  summary: `
    An accounting about strange and uncommon beliefs 
    that I have come to hold over the years.
  `,
  thumbnail: '/thumbnails/Dio_Brando.jpg',
  content: `
    Read about my bizarre beliefs.
  `,
} as const;

const ArticleJourneyIntoTheJungle: Article_Model = {
  id: 'journey-into-the-jungle',
  title: 'Journey into the Jungle',
  author: 'Col Ackerman',
  summary: 'On parallel realms and how to find them.',
  thumbnail: '/thumbnails/palm_tree.jpg',
  content: `
    A story about how I stumbled upon another realm of existense.
  `,
} as const;

const ArticleMetaphysicalExperiments: Article_Model = {
  id: 'metaphysical-experiments',
  title: 'Metaphysical Experiments',
  author: 'Col Ackerman',
  summary: 'Application of the scientific method to metaphyiscal hypotheses.',
  thumbnail: '/thumbnails/metaphysics.webp',
  content: `
    Some information about conducting experiments beyond the capabilities of science.
  `,
} as const;

const ArticleGrowingUpGaming: Article_Model = {
  id: 'growing-up-gaming',
  title: 'Growing Up Gaming',
  author: 'Col Ackerman',
  summary: 'How many hours were wasted?',
  thumbnail: '/thumbnails/snes_pad.webp',
  content: `
    It all started with the Super Nintendo.
  `,
} as const;
