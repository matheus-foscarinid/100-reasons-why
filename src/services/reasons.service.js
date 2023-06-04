const HUNDRED_REASONS_JSON = [
  {
    id: 1,
    reason: 'I am a good listener',
  }
];

const getAllReasons = () => {
  return HUNDRED_REASONS_JSON;
};

const getReasonByIndex = (index) => {
  const reasons = getAllReasons();
  return reasons[index];
};

const getReasonsById = (id) => {
  const reasons = getAllReasons();
  return reasons.find((reason) => reason.id === id);
}

const pushReason = async (reason) => {
  const reasons = getAllReasons();
  const lastReason = reasons[reasons.length - 1];

  // TODO: fix this ID logic
  const newReason = {
    id: lastReason.id + 1,
    reason,
  };

  HUNDRED_REASONS_JSON.push(newReason);
};


export default {
  getAllReasons,
  getReasonByIndex,
  getReasonsById,
  pushReason
};