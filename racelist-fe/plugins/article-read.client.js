import { articleCategory } from '~/shared/analytics';
import { useAnalytics } from '~/composables/useAnalytics';

// Fires article_read once per article view, when the reader scrolls past 75%
// of the page, so it measures reading rather than just landing.
const READ_DEPTH = 0.75;

export default defineNuxtPlugin(() => {
  const router = useRouter();
  const { triggerEvent } = useAnalytics();
  let stop = null;

  const watchArticle = (path) => {
    stop?.();
    stop = null;

    const match = path.match(/^\/arthra\/([^/]+)\/?$/);
    if (!match) return;
    const slug = match[1];

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable > 0 && window.scrollY / scrollable < READ_DEPTH) return;
      stop();
      stop = null;
      triggerEvent('article_read', {
        article_slug: slug,
        article_title: document.title.replace(/\s*\|\s*racelist\.gr$/, ''),
        article_category: articleCategory(slug),
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    stop = () => window.removeEventListener('scroll', onScroll);
  };

  router.afterEach((to) => watchArticle(to.path));
  watchArticle(router.currentRoute.value.path);
});
