import type { Article_Model } from '~/types/models/article_models';

export function getArticleById(id: string): Article_Model {
  switch (id) {
    case 'bizarre-beliefs':
      return ArticleBizarreBeliefs;
    case 'journey-into-the-jungle':
      return ArticleJourneyIntoTheJungle;
    case 'metaphysical-experiments':
      return ArticleMetaphysicalExperiments;
    case 'heart-of-hatred':
      return ArticleHeartOfHatred;

    default:
      throw createError('invalid article id');
  }
}

export function getArticles(): Article_Model[] {
  return [
    ArticleBizarreBeliefs,
    ArticleJourneyIntoTheJungle,
    ArticleMetaphysicalExperiments,
    ArticleHeartOfHatred,
  ];
}

const ArticleBizarreBeliefs: Article_Model = {
  id: 'bizarre-beliefs',
  title: 'Bizarre Beliefs',
  content: 'Read about my bizarre beliefs.',
  author: 'Col Ackerman',
  summary:
    'An accounting about strange and uncommon beliefs that I have come to hold over the years.',
  thumbnail: '/thumbnails/Dio_Brando.jpg',
} as const;

const ArticleJourneyIntoTheJungle: Article_Model = {
  id: 'journey-into-the-jungle',
  title: 'Journey into the Jungle',
  content: 'A story about how I stumbled upon another realm of existense.',
  author: 'Col Ackerman',
  summary: 'On parallel realms and how to find them.',
  thumbnail: '/thumbnails/palm_tree.jpg',
} as const;

const ArticleMetaphysicalExperiments: Article_Model = {
  id: 'metaphysical-experiments',
  title: 'Metaphysical Experiments',
  content: 'Some information about conducting experiments beyond the capabilities of science.',
  author: 'Col Ackerman',
  summary: 'Application of the scientific method to metaphyiscal hypotheses.',
  thumbnail: '/thumbnails/metaphysics.webp',
} as const;

const ArticleHeartOfHatred: Article_Model = {
  id: 'heart-of-hatred',
  title: 'Heart of Hatred',
  content: 'Details about the difficulties of living with hatred within the heart.',
  author: 'Col Ackerman',
  summary: "It ain't easy being cheesy.",
  thumbnail: '/thumbnails/burning_heart.jpg',
} as const;
