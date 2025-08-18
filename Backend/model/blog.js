const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  image: {
    data: Buffer,
    contentType: String,
  },
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true, // Ensure titles are unique
  },
  slug: {
    type: String,
    required: true,
    unique: true, // Ensure slugs are unique
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Automatically generate slug from title before saving
blogSchema.pre('save', function (next) {
  if (this.title && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
      .replace(/(^-|-$)/g, ''); // Remove leading/trailing hyphens
  }
  next();
});

module.exports = mongoose.model('Blog', blogSchema); 