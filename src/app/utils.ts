export const API_PHASE_ONE = `https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne`
export const API_PHASE_TWO = `https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo`
export const STORAGE_KEY_REGISTERED = '__success'
export const STORAGE_KEY_DEMOGRAPHIC = '__demographicData'

export type TPrediction = {
  race: string,
  age: string,
  gender: string
}

export const getTopPredictions = (data: Record<string, Record<string, number>> | null) => {
  const result: Record<string, string> = {};

  for (const category in data) {
    const entries = Object.entries(data[category]);
    const [label] = entries.reduce((max, current) =>
      current[1] > max[1] ? current : max
    );
    result[category] = label
  }
  console.log(result)
  return result as TPrediction;
};

