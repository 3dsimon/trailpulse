export const TrainingService = {
    getTrainingSessionsData() {
        return [
            {
                id: '1000',
                name: 'Morning Interval Run',
                description: 'High-intensity interval training on Bowen Road',
                sportType: 'running',
                duration: 45,
                distance: 8.2,
                averageHeartRate: 158,
                pace: 330,
                intensity: 'high',
                status: 'COMPLETED',
                date: '2024-01-15'
            },
            {
                id: '1001',
                name: 'Hill Repeats - Lung Fu Shan',
                description: 'Strength building with hill repeats',
                sportType: 'running',
                duration: 60,
                distance: 6.5,
                averageHeartRate: 165,
                pace: 355,
                intensity: 'high',
                status: 'COMPLETED',
                date: '2024-01-14'
            },
            {
                id: '1002',
                name: 'Recovery Jog',
                description: 'Easy recovery run along Victoria Harbour',
                sportType: 'running',
                duration: 35,
                distance: 5.0,
                averageHeartRate: 132,
                pace: 420,
                intensity: 'low',
                status: 'COMPLETED',
                date: '2024-01-13'
            },
            {
                id: '1003',
                name: 'Strength Training Session',
                description: 'Full body strength workout',
                sportType: 'strength',
                duration: 50,
                distance: null,
                averageHeartRate: 145,
                pace: null,
                intensity: 'moderate',
                status: 'COMPLETED',
                date: '2024-01-12'
            },
            {
                id: '1004',
                name: 'Tempo Run - Happy Valley',
                description: 'Steady pace tempo training',
                sportType: 'running',
                duration: 55,
                distance: 10.2,
                averageHeartRate: 152,
                pace: 323,
                intensity: 'moderate',
                status: 'COMPLETED',
                date: '2024-01-11'
            },
            {
                id: '1005',
                name: 'Cycling Endurance',
                description: 'Long distance cycling session',
                sportType: 'cycling',
                duration: 120,
                distance: 35.5,
                averageHeartRate: 148,
                pace: 203,
                intensity: 'moderate',
                status: 'COMPLETED',
                date: '2024-01-10'
            },
            {
                id: '1006',
                name: 'Posture Correction Drills',
                description: 'Focus on knee valgus correction',
                sportType: 'strength',
                duration: 25,
                distance: null,
                averageHeartRate: 120,
                pace: null,
                intensity: 'low',
                status: 'COMPLETED',
                date: '2024-01-09'
            },
            {
                id: '1007',
                name: 'Trail Running - Dragon Back',
                description: 'Technical trail running session',
                sportType: 'running',
                duration: 75,
                distance: 9.8,
                averageHeartRate: 162,
                pace: 459,
                intensity: 'high',
                status: 'COMPLETED',
                date: '2024-01-08'
            },
            {
                id: '1008',
                name: 'Swimming Recovery',
                description: 'Low impact swimming session',
                sportType: 'swimming',
                duration: 40,
                distance: 1.2,
                averageHeartRate: 125,
                pace: null,
                intensity: 'recovery',
                status: 'COMPLETED',
                date: '2024-01-07'
            },
            {
                id: '1009',
                name: 'Cadence Training',
                description: 'Focus on improving running cadence',
                sportType: 'running',
                duration: 30,
                distance: 4.5,
                averageHeartRate: 155,
                pace: 315,
                intensity: 'moderate',
                status: 'COMPLETED',
                date: '2024-01-06'
            },
            {
                id: '1010',
                name: 'Yoga Flexibility',
                description: 'Yoga session for flexibility and recovery',
                sportType: 'yoga',
                duration: 60,
                distance: null,
                averageHeartRate: 110,
                pace: null,
                intensity: 'recovery',
                status: 'COMPLETED',
                date: '2024-01-05'
            },
            {
                id: '1011',
                name: 'Scheduled Long Run',
                description: 'Weekend long distance run',
                sportType: 'running',
                duration: 90,
                distance: 15.3,
                averageHeartRate: null,
                pace: null,
                intensity: 'moderate',
                status: 'SCHEDULED',
                date: '2024-01-16'
            },
            {
                id: '1012',
                name: 'Interval Training',
                description: 'Speed intervals on track',
                sportType: 'running',
                duration: 40,
                distance: 6.8,
                averageHeartRate: null,
                pace: null,
                intensity: 'high',
                status: 'IN PROGRESS',
                date: '2024-01-15'
            },
            {
                id: '1013',
                name: 'Strength Session',
                description: 'Core and leg strength',
                sportType: 'strength',
                duration: 45,
                distance: null,
                averageHeartRate: null,
                pace: null,
                intensity: 'moderate',
                status: 'SCHEDULED',
                date: '2024-01-16'
            },
            {
                id: '1014',
                name: 'Cancelled Cycling',
                description: 'Weather cancellation',
                sportType: 'cycling',
                duration: 60,
                distance: 20.0,
                averageHeartRate: null,
                pace: null,
                intensity: 'moderate',
                status: 'CANCELLED',
                date: '2024-01-14'
            }
        ];
    },

    getRecentSessionsData() {
        return [
            {
                id: '1000',
                name: 'Morning Interval Run',
                sportType: 'running',
                duration: 45,
                distance: 8.2,
                status: 'COMPLETED'
            },
            {
                id: '1001',
                name: 'Hill Repeats - Lung Fu Shan',
                sportType: 'running',
                duration: 60,
                distance: 6.5,
                status: 'COMPLETED'
            },
            {
                id: '1002',
                name: 'Recovery Jog',
                sportType: 'running',
                duration: 35,
                distance: 5.0,
                status: 'COMPLETED'
            },
            {
                id: '1003',
                name: 'Strength Training Session',
                sportType: 'strength',
                duration: 50,
                distance: null,
                status: 'COMPLETED'
            },
            {
                id: '1004',
                name: 'Tempo Run - Happy Valley',
                sportType: 'running',
                duration: 55,
                distance: 10.2,
                status: 'COMPLETED'
            },
            {
                id: '1005',
                name: 'Cycling Endurance',
                sportType: 'cycling',
                duration: 120,
                distance: 35.5,
                status: 'COMPLETED'
            }
        ];
    },

    getTrainingSessionsMini() {
        return Promise.resolve(this.getTrainingSessionsData().slice(0, 5));
    },

    getTrainingSessionsSmall() {
        return Promise.resolve(this.getTrainingSessionsData().slice(0, 10));
    },

    getTrainingSessions() {
        return Promise.resolve(this.getTrainingSessionsData());
    },

    getRecentSessions() {
        return Promise.resolve(this.getRecentSessionsData());
    },

    getTrainingSessionById(id) {
        const sessions = this.getTrainingSessionsData();
        return Promise.resolve(sessions.find(session => session.id === id));
    },

    getTrainingSessionsBySportType(sportType) {
        const sessions = this.getTrainingSessionsData();
        return Promise.resolve(sessions.filter(session => session.sportType === sportType));
    },

    getTrainingSessionsByStatus(status) {
        const sessions = this.getTrainingSessionsData();
        return Promise.resolve(sessions.filter(session => session.status === status));
    },

    getTrainingStats() {
        const sessions = this.getTrainingSessionsData();
        const completedSessions = sessions.filter(session => session.status === 'COMPLETED');
        const totalDistance = completedSessions.reduce((sum, session) => sum + (session.distance || 0), 0);
        const totalDuration = completedSessions.reduce((sum, session) => sum + (session.duration || 0), 0);
        const runningSessions = completedSessions.filter(session => session.sportType === 'running').length;

        return Promise.resolve({
            totalSessions: completedSessions.length,
            totalDistance: Math.round(totalDistance * 10) / 10,
            totalDuration: totalDuration,
            runningSessions: runningSessions,
            averageHeartRate: Math.round(completedSessions.reduce((sum, session) => sum + (session.averageHeartRate || 0), 0) / completedSessions.filter(session => session.averageHeartRate).length)
        });
    }
};