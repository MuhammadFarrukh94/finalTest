export const offerFunction=(value)=> {
    return parseFloat((value * (1 - 0.24)).toFixed(2));
  }