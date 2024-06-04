interface ArticleContent {
  title: string;
  content: string;
}

export function getArticleById(article_id: string): ArticleContent {
  switch (article_id) {
    case 'bizarre-beliefs':
      return ArticleBizarreBeliefs;
    case 'journey-into-the-jungle':
      return ArticleJourneyIntoTheJungle;
    case 'metaphysical-experiments':
      return ArticleMetaphysicalExperiments;
    case 'heart-of-hatred':
      return ArticleHeartOfHatred;

    default:
      return { title: 'Server Error', content: 'Invalid article id' };
  }
}

const ArticleBizarreBeliefs: ArticleContent = {
  title: 'Bizarre Beliefs',
  content: 'Read about my bizarre beliefs.',
} as const;

const ArticleJourneyIntoTheJungle: ArticleContent = {
  title: 'Journey into the Jungle',
  content: 'A story about how I stumbled upon another realm of existense.',
} as const;

const ArticleMetaphysicalExperiments: ArticleContent = {
  title: 'Metaphysical Experiments',
  content: 'Some information about conducting experiments beyond the capabilities of science.',
} as const;

const ArticleHeartOfHatred: ArticleContent = {
  title: 'Heart of Hatred',
  content: 'Details about the difficulties of living with hatred within the heart.',
} as const;
