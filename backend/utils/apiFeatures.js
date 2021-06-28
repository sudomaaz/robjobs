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
        }
      );
    }
    this.query = this.query.find(queryCopy);
    return this;
  }

  filter() {
    if (
      this.queryStr.experience ||
      this.queryStr.category ||
      this.queryStr.range ||
      this.queryStr.location
    ) {
      const queryCopy = { ...this.queryStr };
      const queryDelete = ["q", "page", "limit", "sort"];
      queryDelete.forEach((q) => delete queryCopy[q]);
      if (this.queryStr.range) {
        const range = this.queryStr.range.split("-");
        const min = parseInt(range[0]);
        const max = parseInt(range[1]);
        delete queryCopy["range"];
        queryCopy.ctcMin = { $gte: min };
        queryCopy.ctcMax = { $lte: max };
      }
      this.query = this.query.find(queryCopy);
    }
    return this;
  }

  sort() {
    if (this.queryStr.sort) {
      const sortOn = this.queryStr.sort === "desc" ? "-" : "";
      this.query = this.query.sort(sortOn + "ctcMax");
    }
    return this;
  }

  pagination() {
    const page = this.queryStr.page || 1;
    const skip = 1 * (page - 1);
    this.query = this.query.limit(1).skip(skip);
    return this;
  }
}

export default apiFeatures;
