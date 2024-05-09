export const getLength = (text: string) => [...new Intl.Segmenter().segment(text)].length
