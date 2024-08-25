const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app.js');
const Movie = require('../models/movie.model.js');

// Cleanup function
afterEach(async () => {
  await Movie.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Movie Controller Tests', () => {
  let movieId;

  it('should create a new movie', async () => {
    const response = await request(app)
      .post('/movies')
      .send({
        name: 'Inception',
        category: 'Sci-Fi',
        availableTimes: [new Date()],
        duration: 148,
        price: 12.99,
        description: 'A mind-bending thriller.',
      })
      .expect(201);

    expect(response.body).toHaveProperty('_id');
    expect(response.body.name).toBe('Inception');
    movieId = response.body._id;
  });

  it('should get all movies', async () => {
    // Create a movie to ensure there is at least one movie in the database
    await request(app)
      .post('/movies')
      .send({
        name: 'The Matrix',
        category: 'Sci-Fi',
        availableTimes: [new Date()],
        duration: 136,
        price: 9.99,
        description: 'A groundbreaking sci-fi film.',
      });

    const response = await request(app).get('/movies').expect(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should get a movie by ID', async () => {
    const response = await request(app).get(`/movies/${movieId}`).expect(200);
    expect(response.body._id).toBe(movieId);
    expect(response.body.name).toBe('Inception');
  });

  it('should update a movie', async () => {
    const response = await request(app)
      .put(`/movies/${movieId}`)
      .send({ price: 15.99 })
      .expect(200);

    expect(response.body.price).toBe(15.99);
  });

  it('should delete a movie', async () => {
    await request(app).delete(`/movies/${movieId}`).expect(200);

    // Verify the movie has been deleted
    await request(app).get(`/movies/${movieId}`).expect(404);
  });

  it('should add available times to a movie', async () => {
    const response = await request(app)
      .post(`/movies/${movieId}/available-times`)
      .send({ availableTimes: [new Date()] })
      .expect(200);

    expect(response.body.availableTimes).toHaveLength(2); // Adjust based on your initial state
  });

  it('should remove available times from a movie', async () => {
    // Add an available time first
    await request(app)
      .post(`/movies/${movieId}/available-times`)
      .send({ availableTimes: [new Date()] });

    const response = await request(app)
      .delete(`/movies/${movieId}/available-times`)
      .send({ availableTimes: [new Date()] })
      .expect(200);

    expect(response.body.availableTimes).toHaveLength(1); // Adjust based on your initial state
  });

  it('should add ratings to a movie', async () => {
    const response = await request(app)
      .post(`/movies/${movieId}/ratings`)
      .send({
        ratings: [
          {
            customerId: 'customer123',
            score: 5,
            feedback: 'Great movie!',
          },
        ],
      })
      .expect(200);

    expect(response.body.ratings).toHaveLength(1);
    expect(response.body.ratings[0].score).toBe(5);
  });
});
