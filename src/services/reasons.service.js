import fs from 'fs';

const JSON_PATH = 'src/db/100-reasons.json';

const getAllReasons = async () => {
  try {
    const json = fs.readFileSync(JSON_PATH, 'utf8');

    return JSON.parse(json);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getReasonByIndex = async (index) => {
  try {
    const reasonsJSON = await getAllReasons();

    return reasonsJSON[index];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const pushReason = async (reason) => {
  try {
    const reasonsJSON = await getAllReasons();
    
    reasonsJSON.push(reason);
    fs.writeFileSync(JSON_PATH, JSON.stringify(reasonsJSON, null, 2), );
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const reasonsService = {
  getAllReasons,
  getReasonByIndex,
  pushReason
};