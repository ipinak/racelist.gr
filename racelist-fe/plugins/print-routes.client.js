export default defineNuxtPlugin(() => {
  if (import.meta.env.NODE_ENV !== 'PRODUCTION') {
    const router = useRouter();
    const allRoutes = router.getRoutes();
    console.log('All routes:', allRoutes);
  }
});