import mongoose from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const [alex, jordan, sam] = await User.create([
      { name: 'Alex Rivera', email: 'alex.rivera@example.com' },
      { name: 'Jordan Lee', email: 'jordan.lee@example.com' },
      { name: 'Sam Patel', email: 'sam.patel@example.com' },
    ]);

    await Team.create({
      name: 'Trail Blazers',
      description: 'A team focused on consistency and outdoor activities.',
      members: [alex._id, jordan._id],
    });

    await Team.create({
      name: 'Peak Performers',
      description: 'Strength and conditioning goals for every level.',
      members: [sam._id],
    });

    await Activity.create([
      {
        user: alex._id,
        type: 'running',
        durationMinutes: 35,
        distanceKm: 5.2,
        points: 120,
        completedAt: new Date('2026-08-11T16:30:00Z'),
      },
      {
        user: jordan._id,
        type: 'walking',
        durationMinutes: 45,
        distanceKm: 3.8,
        points: 80,
        completedAt: new Date('2026-08-12T15:00:00Z'),
      },
      {
        user: sam._id,
        type: 'strength training',
        durationMinutes: 30,
        points: 100,
        completedAt: new Date('2026-08-12T17:15:00Z'),
      },
    ]);

    await LeaderboardEntry.create([
      { user: alex._id, points: 420, rank: 1, period: '2026-08' },
      { user: sam._id, points: 365, rank: 2, period: '2026-08' },
      { user: jordan._id, points: 310, rank: 3, period: '2026-08' },
    ]);

    await Workout.create([
      {
        title: 'Fresh Start Cardio',
        description: 'A low-impact session to build a steady aerobic base.',
        difficulty: 'beginner',
        durationMinutes: 20,
        exercises: ['Warm-up walk', 'Brisk walk', 'Cool-down stretch'],
      },
      {
        title: 'Core Builder',
        description: 'A focused bodyweight routine for core strength.',
        difficulty: 'intermediate',
        durationMinutes: 25,
        exercises: ['Plank', 'Dead bug', 'Bird dog', 'Side plank'],
      },
    ]);

    console.log('Database seeding complete: 3 users, 2 teams, 3 activities, 3 leaderboard entries, 2 workouts');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
