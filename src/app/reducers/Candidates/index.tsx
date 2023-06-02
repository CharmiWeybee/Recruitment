import { getActiveCandidateReducer } from "./viewCandidateReducer";
import { getAllCandidateReducer } from "./viewAllCandidateReducer";
import { getCandidateByIDReducer } from "./viewCandidateByIdReducer";

const candidateReducer = {
  getActiveCandidateReducer,
  getAllCandidateReducer,
  getCandidateByIDReducer,
};

export default candidateReducer;
