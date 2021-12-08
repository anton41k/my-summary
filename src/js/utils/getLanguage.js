const getLanguage = () => {
  const defaultLanguage = 'en';
  let currentLanguage = localStorage.getItem('language');
  if (!currentLanguage) {
    localStorage.setItem('language', defaultLanguage);
    return defaultLanguage;
  }
  return currentLanguage;
};

export default getLanguage;