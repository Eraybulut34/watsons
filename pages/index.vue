<template>
  <div class="animated fadeIn">
      <b-container>
    <b-row>
        <b-col md="4" v-for="book in books"
        :key="book.id">
      <b-card
        img-src="https://superbilgiler.com/wp-content/uploads/2018/11/656.jpg"
        img-alt="Img"
        img-top
      >
        <h4 class="card-title">
       {{ book.name }}
        </h4>
        <p class="card-text">
         
          {{ book.author }}
        </p>
        <p class="card-text">
          {{ book.category }}
        </p>
        <p class="card-text">
          {{ book.pagenumber }} Sayfa
        </p>
        <div slot="footer">
          <b-btn variant="primary" block>Add</b-btn>
        </div>
      </b-card>
      </b-col>
    </b-row>
    </b-container>

    <div class="card-pagination">
      <div
        class="page-index"
        v-for="i in nbPages"
        :key="i"
        @click="goto(i)"
        :class="{ active: currentPage(i) }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuTypes: [
        { id: null, name: 'Kategori' },
        { id: 1, name: 'Polisiye' },
        { id: 2, name: 'Felsefe' },
        { id: 3, name: 'Kişisel Gelişim' },
      ],
      books: null,
      bookName: null,
      bookAuthor: null,
      bookCategory: 'Kategori',
      pageNumber: null,
      bookId: null,
    }
  },
  mounted() {
    this.getBooks()
  },
  methods: {
    saveBook() {
      this.$axios
        .post('http://localhost:3000/posts', {
          name: this.bookName,
          author: this.bookAuthor,
          category: this.bookCategory,
          pagenumber: this.pageNumber,
        })
        .then(() => {
          this.getBooks()
          this.bookAuthor = null
          this.bookName = null
          this.bookCategory = null
          this.pageNumber = null
        })
    },
    deleteBook(id) {
      this.$axios.delete('http://localhost:3000/posts/' + id).then(() => {
        this.getBooks()
      })
    },

    getBooks() {
      this.$axios
        .get('http://localhost:3000/posts')
        .then((response) => (this.books = response.data))
    },
    updateBook() {
      this.$axios
        .put('http://localhost:3000/posts/' + this.bookId, {
          name: this.bookName,
          category: this.bookCategory,
          author: this.bookAuthor,
          pagenumber: this.pageNumber,
        })
        .then((resp) => {
          this.getBooks()
          this.bookAuthor = null
          this.bookName = null
          this.bookCategory = null
          this.pageNumber = null
          this.bookId = null
        })
        .catch((error) => {
          console.log(error)
        })
    },
    editBook(data) {
      this.bookName = data.name
      this.bookAuthor = data.author
      this.bookCategory = data.category
      this.pageNumber = data.pagenumber
      this.bookId = data.id
    },
  },
  beforeMount() {
    this.books
  },
}
</script>

<style>
.card-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.page-index {
  margin-left: 10px;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background: #007bff;
}
.active {
  width: 20px;
  height: 20px;
  border-radius: 20px;
}
</style>