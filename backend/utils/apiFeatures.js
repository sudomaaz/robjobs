class apiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const queryCopy = {};
    if (this.queryStr.q) {
      queryCopy.$or = [];
      queryCopy.$or.push(
        {
          title: {
            $regex: this.queryStr.q,
            $options: "i",
          },
        },
        {
          company: {
            $regex: this.queryStr.q,
            $options: "i",
          },
        },
        {
          description: {
            $regex: this.queryStr.q,
            $options: "i",
          },
        },
        {
          location: {
            $regex: this.queryStr.q,
            $options: "i",
          },
        }
      );
    }
    this.query = this.query.find(queryCopy);
    return this;
  }

  sort() {
    this.query = this.query.sort({ createdAt: -1 });
    return this;
  }
}

export default apiFeatures;
