export function selectGender(gender) {
    console.log("Action: ", gender)
    return {
        type: 'GENDER_SELECTED',
        payload: gender
    };
}