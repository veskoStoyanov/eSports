export const mainUrl = process.env.API_URL || 'http://127.0.0.1:8081/api/';

export const urls = {
    sports: `${mainUrl}matches`,
    bet: `${mainUrl}bet`,
};