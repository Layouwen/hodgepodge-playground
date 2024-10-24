class ArticleStore {
  private storeKey = "articleStore";
  private store: Record<
    string,
    Record<string, Record<string, Record<string, string>>>
  > = {};

  constructor() {
    const store = localStorage.getItem(this.storeKey);
    this.store = store ? JSON.parse(store) : {};
  }

  private setStore(
    articleId: string,
    paragraphId: string,
    sentenceId: string,
    key: string,
    value: string
  ) {
    if (!this.store[articleId]) {
      this.store[articleId] = {};
    }
    if (!this.store[articleId][paragraphId]) {
      this.store[articleId][paragraphId] = {};
    }
    if (!this.store[articleId][paragraphId][sentenceId]) {
      this.store[articleId][paragraphId][sentenceId] = {};
    }

    this.store[articleId][paragraphId][sentenceId][key] = value;
  }

  private saveStore() {
    localStorage.setItem(this.storeKey, JSON.stringify(this.store));
  }

  public getSentenceEn(
    articleId: string,
    paragraphId: string,
    sentenceId: string
  ) {
    return this.store[articleId]?.[paragraphId]?.[sentenceId]?.enAnswer || "";
  }

  public setSentenceEn(
    articleId: string,
    paragraphId: string,
    sentenceId: string,
    enAnswer: string
  ) {
    this.setStore(articleId, paragraphId, sentenceId, "enAnswer", enAnswer);
    this.saveStore();
  }
}

export const articleStore = new ArticleStore();
