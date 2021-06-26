class apiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const queryCopy = {};
    if (this.queryStr.title) {
      queryCopy.$or = [];
      queryCopy.$or.push({
        title: {
          $regex: this.queryStr.title,
          $options: "i",
        },
      });
    }
    if (this.queryStr.company) {
      queryCopy.$or.push({
        company: {
          $regex: this.queryStr.company,
          $options: "i",
        },
      });
    }
    if (this.queryStr.location) {
      queryCopy.$or.push({
        location: {
          $regex: this.queryStr.location,
          $options: "i",
        },
      });
    }
    this.query = this.query.find(queryCopy);
    return this;
  }

  filter() {
    if (
      this.queryStr.experience ||
      this.queryStr.category ||
      this.queryStr.range
    ) {
      const queryCopy = { ...this.queryStr };
      const queryDelete = [
        "title",
        "company",
        "location",
        "page",
        "limit",
        "sort",
      ];
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
    const skip = 6 * (page - 1);
    this.query = this.query.limit(6).skip(skip);
    return this;
  }
}

export default apiFeatures;
