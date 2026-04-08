import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const loadStops = () => {
  try {
    const stopsPath = path.join(__dirname, '../config/stops.json');
    const stopsData = fs.readFileSync(stopsPath, 'utf-8');
    const { stops } = JSON.parse(stopsData);
    return stops;
  } catch (error) {
    console.error('Error loading stops:', error);
    return [];
  }
};
